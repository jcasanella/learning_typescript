import { MatchData } from "./MatchData";
import { MatchKeys } from "./MatchResult";
import { dateStringToDate } from "./utils";

export class MatchReader {
    matches: MatchData[] = [];

    constructor(public dataReader: DataReader) {}

    load(): void {
        this.dataReader.read();
        this.matches = this.dataReader.data.map((row: string[]): MatchData => {
            return [
                dateStringToDate(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5] as MatchKeys,
                row[6]
            ];
        });
    }
}