export interface IRoute {
  path: string;
  render: () => HTMLElement;
}

type RouterCallback = (params: Record<string, string>) => void;

export class Router {
  private readonly routes: Record<string, () => HTMLElement> = {};
  private appRoot?: HTMLElement;
  private routeChangeListeners: RouterCallback[] = [];

  constructor(routes: IRoute[]) {
    for (const route of routes) {
      this.routes[route.path] = route.render;
    }

    window.addEventListener('popstate', () => this.handleRoute());

    document.addEventListener('click', (e) => {
      const target = (e.target as HTMLElement).closest('a[data-link]');
      if (target) {
        e.preventDefault();
        const href = target.getAttribute('href');
        if (href) {
          this.navigate(href);
        }
      }
    });
  }

  public init(rootElement: HTMLElement): void {
    this.appRoot = rootElement;
    this.handleRoute();
  }

  public navigate(path: string, replace = false): void {
    if (replace) {
      window.history.replaceState({}, '', path);
    } else {
      window.history.pushState({}, '', path);
    }
    this.handleRoute();
  }

  public updateQueryParams(newParams: Record<string, string | null>, replace = false): void {
    const url = new URL(window.location.href);

    for (const [key, value] of Object.entries(newParams)) {
      if (value === null || value === undefined || value === '') {
        url.searchParams.delete(key);
      } else {
        url.searchParams.set(key, value);
      }
    }

    const targetUrl = url.pathname + url.search;
    this.navigate(targetUrl, replace);
  }

  public getQueryParams(): Record<string, string> {
    const searchParams = new URLSearchParams(window.location.search);
    const params: Record<string, string> = {};
    searchParams.forEach((value, key) => {
      params[key] = value;
    });
    return params;
  }

  public onRouteChange(callback: RouterCallback): void {
    this.routeChangeListeners.push(callback);
  }

  private handleRoute(): void {
    if (!this.appRoot) {
      return;
    }

    const rawPath: string = window.location.pathname;
    const path: string = rawPath === '/home' || rawPath === '' ? '/' : rawPath;

    const renderFunction: (() => HTMLElement) | undefined =
      this.routes[path] || this.routes['/404'] || this.routes['/'];

    this.appRoot.innerHTML = '';
    if (renderFunction) {
      this.appRoot.append(renderFunction());
    }

    const currentParams = this.getQueryParams();
    for (const callback of this.routeChangeListeners) {
      callback(currentParams);
    }
  }
}