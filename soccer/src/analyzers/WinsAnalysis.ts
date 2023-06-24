import { MatchData } from "../MatchData";
import { MatchResult } from "../MatchResult";
import { Analyzer } from "../Summary";

export class WinsAnalysis implements Analyzer {
    constructor(private readonly _team: string) {}

    run(matches: MatchData[]): string {
        let wins = 0;
        for (let match of matches) {
            if (match[1] === this._team && match[5] === MatchResult.HomeWin) {
                wins++;
            }
        
            if (match[2] === this._team && match[5] === MatchResult.AwayWin) {
                wins++;
            }
        }

        return `Team ${this._team} won ${wins} games`;
    }
}