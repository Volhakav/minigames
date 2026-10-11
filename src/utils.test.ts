import { describe, it, expect } from 'vitest';
import { formatRelativeTime } from './components/game-details-dialog';

describe('Game Details Utilities - formatRelativeTime', () => {
  it('should return "just now" for undefined or empty dates', () => {
    expect(formatRelativeTime(undefined)).toBe('just now');
    expect(formatRelativeTime('')).toBe('just now');
  });

  it('should return "just now" for dates within the last minute', () => {
    const recentDate = new Date(Date.now() - 30 * 1000).toISOString();
    expect(formatRelativeTime(recentDate)).toBe('just now');
  });

  it('should return correct minutes ago for recent times', () => {
    const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000).toISOString();
    expect(formatRelativeTime(fiveMinutesAgo)).toBe('5 min ago');
  });
});