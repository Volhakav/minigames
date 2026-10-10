import { GameData } from '../components/game-card';
import { LeaderboardPlayer } from '../components/leaderboard-section';

export const API_BASE_URL = 'https://faxb76kxra.execute-api.eu-central-1.amazonaws.com';

export interface CategoryItem {
  id?: string;
  name?: string;
  label?: string;
  value?: string;
  slug?: string;
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

export interface GameRecord {
  position: number;
  playerName: string;
  score: number;
  achievedAt: string;
}

export interface RawCommentItem {
  id?: string;
  author?: string;
  authorName?: string;
  userName?: string;
  avatarBg?: string;
  createdAt?: string;
  timestamp?: string;
  date?: string;
  text?: string;
  content?: string;
  comment?: string;
  likesCount?: number;
  likes?: number;
  isLikedByCurrentUser?: boolean;
  isLiked?: boolean;
  liked?: boolean;
}

export interface CommentsApiResponse {
  data: RawCommentItem[];
  totalCount: number;
}

export interface GameDetails {
  slug: string;
  name: string;
  category: string;
  price: string;
  shortDescription: string;
  description?: string;
  rating: number;
  likesCount: number;
  isLiked?: boolean;
  isLikedByCurrentUser?: boolean;
  cardImage: string;
  heroImage?: string;
  galleryImages?: string[];
  developer?: string;
  releaseDate?: string;
  featured?: boolean;
  topRecords?: GameRecord[];
  comments?: RawCommentItem[];
  specs?: {
    genre?: string;
    players?: string;
    duration?: string;
    price?: string;
  };
}

export const resolveApiImageUrl = (rawPath?: string): string => {
  if (!rawPath || typeof rawPath !== 'string') {
    return 'https://placehold.co/600x350/1e1e1e/ffffff?text=No+Image';
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
      (game.heroImage as string) ||
      (game.coverImage as string) ||
      (game.image as string) ||
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
    const rawImage =
      (game.cardImage as string) ||
      (game.heroImage as string) ||
      (game.coverImage as string) ||
      (game.image as string) ||
      '';

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

export const fetchGameDetails = async (gameSlug: string, userEmail?: string): Promise<GameDetails> => {
  const queryParams = new URLSearchParams();
  if (userEmail) {
    queryParams.append('userEmail', userEmail);
  }

  const queryString = queryParams.toString() ? `?${queryParams.toString()}` : '';
  const response = await fetch(`${API_BASE_URL}/api/games/${gameSlug}${queryString}`);

  if (!response.ok) {
    throw new Error(`Failed to load game details for "${gameSlug}" (Status: ${response.status})`);
  }

  const result = await response.json();
  const game = result.data || result;

  const rawCardImage =
    (game.cardImage as string) ||
    (game.heroImage as string) ||
    (game.coverImage as string) ||
    (game.image as string) ||
    '';

  const rawHeroImage =
    (game.heroImage as string) ||
    (game.bannerImage as string) ||
    (game.cardImage as string) ||
    (game.coverImage as string) ||
    '';

  return {
    slug: (game.slug as string) || gameSlug,
    name: (game.name as string) || (game.title as string) || 'Untitled Game',
    category: (game.category as string) || 'Casual',
    price: (game.price as string) || (game.specs?.price as string) || 'Free',
    shortDescription: (game.shortDescription as string) || '',
    description:
      (game.description as string) ||
      (game.fullDescription as string) ||
      (game.shortDescription as string) ||
      'No description available.',
    rating: (game.rating as number) || 0,
    likesCount: (game.likesCount as number) || 0,
    isLiked: Boolean(game.isLiked || game.isLikedByCurrentUser),
    isLikedByCurrentUser: Boolean(game.isLikedByCurrentUser ?? game.isLiked),
    cardImage: resolveApiImageUrl(rawCardImage),
    heroImage: resolveApiImageUrl(rawHeroImage),
    galleryImages: Array.isArray(game.galleryImages)
      ? game.galleryImages.map((img: string) => resolveApiImageUrl(img))
      : [],
    developer: (game.developer as string) || 'Unknown Developer',
    releaseDate: (game.releaseDate as string) || 'N/A',
    featured: Boolean(game.featured),
    topRecords: Array.isArray(game.topRecords) ? game.topRecords : [],
    comments: Array.isArray(game.comments) ? game.comments : [],
    specs: game.specs || {
      genre: (game.category as string) || 'Casual',
      players: '1 Player',
      duration: '15-30 mins',
      price: (game.price as string) || 'Free',
    },
  };
};

export interface ToggleFavoriteResponse {
  gameSlug: string;
  isFavorited: boolean;
  likesCount: number;
}

export const toggleGameFavorite = async (
  gameSlug: string,
  userEmail: string
): Promise<ToggleFavoriteResponse> => {
  const response = await fetch(`${API_BASE_URL}/api/games/${gameSlug}/favorite`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userEmail }),
  });

  if (!response.ok) {
    throw new Error(`Failed to update favorite status (Status: ${response.status})`);
  }

  const result = await response.json();
  const data = result.data || result;
  return {
    gameSlug: (data.gameSlug as string) || gameSlug,
    isFavorited: Boolean(data.isFavorited),
    likesCount: Number(data.likesCount ?? 0),
  };
};

export const fetchGameComments = async (
  gameSlug: string,
  limit = 3,
  sort = 'newest'
): Promise<CommentsApiResponse> => {
  const queryParams = new URLSearchParams({
    limit: limit.toString(),
    sort,
  });

  const response = await fetch(`${API_BASE_URL}/api/games/${gameSlug}/comments?${queryParams.toString()}`);

  if (!response.ok) {
    throw new Error(`Failed to load comments for "${gameSlug}" (Status: ${response.status})`);
  }

  const result = await response.json();

  let commentsList: RawCommentItem[] = [];
  let total = 0;

  if (Array.isArray(result)) {
    commentsList = result;
    total = result.length;
  } else if (Array.isArray(result.items)) {
    commentsList = result.items;
    total = result.totalItems ?? result.total ?? result.count ?? result.items.length;
  } else if (result.data) {
    if (Array.isArray(result.data)) {
      commentsList = result.data;
      total = result.meta?.totalItems ?? result.meta?.total ?? result.totalCount ?? result.data.length;
    } else if (Array.isArray(result.data.items)) {
      commentsList = result.data.items;
      total = result.data.totalItems ?? result.data.total ?? result.meta?.totalItems ?? result.data.items.length;
    } else if (Array.isArray(result.data.comments)) {
      commentsList = result.data.comments;
      total = result.data.totalComments ?? result.data.comments.length;
    }
  } else if (Array.isArray(result.comments)) {
    commentsList = result.comments;
    total = result.totalComments ?? result.comments.length;
  }

  return {
    data: commentsList,
    totalCount: total,
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