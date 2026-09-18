export interface LeaderboardPlayer {
  rank: number;
  playerName: string;
  gamesPlayed: number;
  totalScore: number;
  streakDays: number;
  favoriteGameSlug: string;
  favoriteGameName: string;
}

const getInitials = (name: string): string => {
  const uppers = name.match(/[A-Z]/g);
  if (uppers && uppers.length >= 2) {
    return uppers.slice(0, 2).join('');
  }
  return name.slice(0, 2).toUpperCase();
};

const formatScore = (score: number): string => {
  return score.toLocaleString('en-US');
};

const formatScoreShort = (score: number): string => {
  if (score >= 1000) {
    return `${(score / 1000).toFixed(1)}K`;
  }
  return score.toString();
};

export const createLeaderboardSection = (players: LeaderboardPlayer[]): HTMLElement => {
  const section = document.createElement('section');
  section.className = 'leaderboard-section';

  const header = document.createElement('header');
  header.className = 'leaderboard-section__header';

  const titleWrapper = document.createElement('div');
  titleWrapper.className = 'leaderboard-section__title-wrapper';

  const badge = document.createElement('span');
  badge.className = 'leaderboard-section__badge';

  const title = document.createElement('h2');
  title.className = 'leaderboard-section__title';
  title.innerHTML = `
    <span class="leaderboard-section__title-full">Top Players This Week</span>
    <span class="leaderboard-section__title-short">Top Players</span>
  `;

  titleWrapper.append(badge, title);
  header.append(titleWrapper);

  const tableWrapper = document.createElement('div');
  tableWrapper.className = 'leaderboard-section__table-wrapper';

  const table = document.createElement('table');
  table.className = 'leaderboard-table';

  const thead = document.createElement('thead');
  thead.className = 'leaderboard-table__head';

  const headerRow = document.createElement('tr');
  headerRow.className = 'leaderboard-table__row leaderboard-table__row--head';

  const headers = [
    { html: 'RANK', classModifier: 'rank' },
    { html: 'PLAYER', classModifier: 'player' },
    {
      html: '<span class="leaderboard-table__head-full">GAMES PLAYED</span><span class="leaderboard-table__head-short">GAMES</span>',
      classModifier: 'games',
    },
    {
      html: '<span class="leaderboard-table__head-full">TOTAL SCORE</span><span class="leaderboard-table__head-short">SCORE</span>',
      classModifier: 'score',
    },
    { html: 'STREAK', classModifier: 'streak' },
    { html: 'FAVORITE GAME', classModifier: 'favorite' },
  ];

  for (const h of headers) {
    const th = document.createElement('th');
    th.className = `leaderboard-table__th leaderboard-table__th--${h.classModifier}`;
    th.innerHTML = h.html;
    headerRow.append(th);
  }

  thead.append(headerRow);

  const tbody = document.createElement('tbody');
  tbody.className = 'leaderboard-table__body';

  for (const player of players) {
    const row = document.createElement('tr');
    row.className = 'leaderboard-table__row';

    // Rank cell
    const tdRank = document.createElement('td');
    tdRank.className = 'leaderboard-table__td leaderboard-table__td--rank';
    const rankSpan = document.createElement('span');
    rankSpan.className = `leaderboard-table__rank-text${
      player.rank === 1 ? ' leaderboard-table__rank-text--top' : ''
    }`;
    rankSpan.textContent = `#${player.rank}`;
    tdRank.append(rankSpan);

    // Player cell
    const tdPlayer = document.createElement('td');
    tdPlayer.className = 'leaderboard-table__td leaderboard-table__td--player';
    const playerCell = document.createElement('div');
    playerCell.className = 'leaderboard-table__player-cell';

    const avatar = document.createElement('div');
    avatar.className = `leaderboard-table__avatar leaderboard-table__avatar--${player.rank}`;
    avatar.textContent = getInitials(player.playerName);

    const playerName = document.createElement('span');
    playerName.className = 'leaderboard-table__player-name';
    playerName.textContent = player.playerName;

    playerCell.append(avatar, playerName);
    tdPlayer.append(playerCell);

    // Games Played cell
    const tdGames = document.createElement('td');
    tdGames.className = 'leaderboard-table__td leaderboard-table__td--games';
    tdGames.textContent = player.gamesPlayed.toString();

    // Total Score cell
    const tdScore = document.createElement('td');
    tdScore.className = 'leaderboard-table__td leaderboard-table__td--score';
    tdScore.innerHTML = `
      <span class="leaderboard-table__score-full">${formatScore(player.totalScore)}</span>
      <span class="leaderboard-table__score-short">${formatScoreShort(player.totalScore)}</span>
    `;

    // Streak cell
    const tdStreak = document.createElement('td');
    tdStreak.className = 'leaderboard-table__td leaderboard-table__td--streak';
    const streakCell = document.createElement('div');
    streakCell.className = 'leaderboard-table__streak-cell';
    streakCell.innerHTML = `
      <span class="leaderboard-table__fire-icon">🔥</span>
      <span class="leaderboard-table__streak-full">${player.streakDays} days</span>
      <span class="leaderboard-table__streak-short">${player.streakDays}d</span>
    `;
    tdStreak.append(streakCell);

    // Favorite Game cell
    const tdFavorite = document.createElement('td');
    tdFavorite.className = 'leaderboard-table__td leaderboard-table__td--favorite';
    const gameTag = document.createElement('span');
    gameTag.className = 'leaderboard-table__game-tag';
    gameTag.textContent = player.favoriteGameName;
    tdFavorite.append(gameTag);

    row.append(tdRank, tdPlayer, tdGames, tdScore, tdStreak, tdFavorite);
    tbody.append(row);
  }

  table.append(thead, tbody);
  tableWrapper.append(table);
  section.append(header, tableWrapper);

  return section;
};
