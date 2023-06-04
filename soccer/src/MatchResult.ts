export const MatchResult = {
    HomeWin: 'H',
    AwayWin: 'A',
    Draw: 'D'
};

export type MatchKeys = typeof MatchResult[keyof typeof MatchResult];