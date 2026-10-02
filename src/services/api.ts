import { GameData } from '../components/game-card';

export const API_BASE_URL = 'https://faxb76kxra.execute-api.eu-central-1.amazonaws.com';

export const resolveApiImageUrl = (rawPath?: string): string => {
  if (!rawPath || typeof rawPath !== 'string') {
    return 'https://placehold.co/300x380/1e1e1e/ffffff?text=No+Image';
  }

  // Wyciągamy samą nazwę pliku (np. islanders-new-shores-card.jpg)
  const fileName = rawPath.split('/').pop() || rawPath;

  // Pobieramy base path ustawiony w Vite (np. '/minigames/' dla GH Pages lub '/' lokalnie)
  const rawBase = import.meta.env.BASE_URL || '/';
  const basePath = rawBase.endsWith('/') ? rawBase : `${rawBase}/`;

  // Wskazujemy na Twój lokalny folder public/images/games/
  return `${basePath}images/games/${fileName}`;
};

export const fetchFeaturedGames = async (): Promise<GameData[]> => {
  const response = await fetch(`${API_BASE_URL}/api/games?featured=true`);

  if (!response.ok) {
    throw new Error(`Failed to load featured games (Status: ${response.status})`);
  }

  const result = await response.json();
  const rawList = Array.isArray(result) ? result : result.data || [];

  return rawList.map((game: Record<string, unknown>) => {
    const rawImage = (game.cardImage as string) || '';

    return {
      ...game,
      cardImage: resolveApiImageUrl(rawImage),
    } as unknown as GameData;
  });
};