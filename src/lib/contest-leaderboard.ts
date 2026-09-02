/**
 * TOP CRYPTO CASH — leaderboard data source.
 *
 * To update the rating, edit ONLY this file: add/replace entries in
 * `LEADERBOARD` below. The page sorts by points (desc) and assigns places
 * automatically, so the order here does not matter.
 *
 * Example:
 *   export const LEADERBOARD: LeaderboardEntry[] = [
 *     { login: "alex_cs", points: 42 },
 *     { login: "maria88", points: 37 },
 *   ];
 */
export type LeaderboardEntry = {
  /** Participant login exactly as registered in Crypto Cash. */
  login: string;
  /** Confirmed points after verification. */
  points: number;
};

export const LEADERBOARD: LeaderboardEntry[] = [];

/** Optional: date/time of the last update, shown under the table when set. */
export const LEADERBOARD_UPDATED_AT: string | null = null;

/** Returns entries sorted by points (desc), then login (asc), with places assigned. */
export function getRankedLeaderboard(): (LeaderboardEntry & { place: number })[] {
  return [...LEADERBOARD]
    .sort((a, b) => b.points - a.points || a.login.localeCompare(b.login))
    .map((e, i) => ({ ...e, place: i + 1 }));
}
