import { GameData } from '../components/game-card';
import { LeaderboardPlayer } from '../components/leaderboard-section';

export const API_BASE_URL = 'https://faxb76kxra.execute-api.eu-central-1.amazonaws.com';

export interface CategoryItem {
  id?: string;
  name: string;
  value: string;
  isDefault?: boolean;
}

export interface FetchGamesParams {
  page?: number;
  limit?: number;
  category?: string;
  sort?: string;
}

export interface GamesApiResponse {
  data: GameData[];
  meta?: {
    page: number;
    limit: number;
    totalItems: number;
    totalPages: number;
  };
}

export const resolveApiImageUrl = (rawPath?: string): string => {
  if (!rawPath || typeof rawPath !== 'string') {
    return 'https://placehold.co/300x380/1e1e1e/ffffff?text=No+Image';
  }

  if (rawPath.startsWith('http://') || rawPath.startsWith('https://')) {
    return rawPath;
  }

  const fileName = rawPath.split('/').pop() || rawPath;
  const rawBase = import.meta.env.BASE_URL || '/';
  const basePath = rawBase.endsWith('/') ? rawBase : `${rawBase}/`;

  return `${basePath}images/games/${fileName}`;
};

export const fetchCategories = async (): Promise<CategoryItem[]> => {
  const response = await fetch(`${API_BASE_URL}/api/categories`);

  if (!response.ok) {
    throw new Error(`Failed to load categories (Status: ${response.status})`);
  }

  const result = await response.json();
  return Array.isArray(result) ? result : result.data || [];
};

export const fetchFeaturedGames = async (): Promise<GameData[]> => {
  const response = await fetch(`${API_BASE_URL}/api/games?featured=true`);

  if (!response.ok) {
    throw new Error(`Failed to load featured games (Status: ${response.status})`);
  }

  const result = await response.json();
  const rawList = Array.isArray(result) ? result : result.data || [];

  return rawList.map((game: Record<string, unknown>) => {
    const rawImage =
      (game.cardImage as string) ||
      (game.coverImage as string) ||
      (game.image as string) ||
      (game.heroImage as string) ||
      '';

    return {
      slug: (game.slug as string) || '',
      name: (game.name as string) || (game.title as string) || 'Untitled',
      category: (game.category as string) || '',
      price: (game.price as string) || 'Free',
      shortDescription: (game.shortDescription as string) || '',
      rating: (game.rating as number) || 0,
      likesCount: (game.likesCount as number) || 0,
      cardImage: resolveApiImageUrl(rawImage),
      featured: Boolean(game.featured),
    };
  });
};

export const fetchLibraryGames = async (params: FetchGamesParams = {}): Promise<GamesApiResponse> => {
  const { page = 1, limit = 6, category = 'all', sort = 'rating-desc' } = params;

  const queryParams = new URLSearchParams({
    page: page.toString(),
    limit: limit.toString(),
    category,
    sort,
  });

  const response = await fetch(`${API_BASE_URL}/api/games?${queryParams.toString()}`);

  if (!response.ok) {
    throw new Error(`Failed to load library games (Status: ${response.status})`);
  }

  const result = await response.json();
  const rawList = Array.isArray(result) ? result : result.data || [];

  const formattedGames: GameData[] = rawList.map((game: Record<string, unknown>) => {
    const rawImage = (game.cardImage as string) || (game.coverImage as string) || (game.image as string) || '';

    return {
      slug: (game.slug as string) || '',
      name: (game.name as string) || (game.title as string) || 'Untitled',
      category: (game.category as string) || 'all',
      price: (game.price as string) || 'Free',
      shortDescription: (game.shortDescription as string) || '',
      rating: (game.rating as number) || 0,
      likesCount: (game.likesCount as number) || 0,
      cardImage: resolveApiImageUrl(rawImage),
      featured: Boolean(game.featured),
    };
  });

  return {
    data: formattedGames,
    meta: result.meta,
  };
};

export const fetchLeaderboard = async (): Promise<LeaderboardPlayer[]> => {
  const response = await fetch(`${API_BASE_URL}/api/leaderboard`);

  if (!response.ok) {
    throw new Error(`Failed to load leaderboard data (Status: ${response.status})`);
  }

  const result = await response.json();
  const rawList = Array.isArray(result) ? result : result.data || [];

  return rawList.map((item: Record<string, unknown>, index: number) => ({
    rank: (item.rank as number) || index + 1,
    playerName: (item.playerName as string) || (item.player as string) || (item.name as string) || 'Anonymous',
    gamesPlayed: (item.gamesPlayed as number) || (item.games as number) || 0,
    totalScore: (item.totalScore as number) || (item.score as number) || 0,
    streakDays: (item.streakDays as number) || (item.streak as number) || 0,
    favoriteGameSlug: (item.favoriteGameSlug as string) || '',
    favoriteGameName: (item.favoriteGameName as string) || (item.favoriteGame as string) || 'N/A',
  }));
};