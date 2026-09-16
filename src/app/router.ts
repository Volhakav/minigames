interface IRoute {
  path: string;
  render: () => HTMLElement;
}

export class Router {
  private readonly routes: Record<string, () => HTMLElement>;
  private appRoot: HTMLElement | null = null;

  constructor(routes: IRoute[]) {
    this.routes = routes.reduce(
      (accumulator, route) => {
        accumulator[route.path] = route.render;
        return accumulator;
      },
      {} as Record<string, () => HTMLElement>
    );

    window.addEventListener('popstate', () => this.handleRoute());
  }

  public init(rootElement: HTMLElement): void {
    this.appRoot = rootElement;
    this.handleRoute();
  }

  public navigate(path: string): void {
    window.history.pushState({}, '', path);
    this.handleRoute();
  }

  private handleRoute(): void {
    if (!this.appRoot) {
      return;
    }

    const path: string = window.location.pathname;
    const renderFunction: (() => HTMLElement) | undefined =
      this.routes[path] || this.routes['/404'];

    this.appRoot.innerHTML = '';
    if (renderFunction) {
      this.appRoot.append(renderFunction());
    }
  }
}