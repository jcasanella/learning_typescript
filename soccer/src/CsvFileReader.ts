import fs from 'fs';
import { dateStringToDate } from './utils';
import { MatchKeys, MatchResult } from './MatchResult';

type MatchData = [Date, string, string, number, number, MatchKeys, string];

export class CsvFileReader {
    data: MatchData[] = [];

    constructor(private readonly filename: string) {}

    read(): void {
        this.data = fs.readFileSync(this.filename, { 
            encoding: 'utf-8'
        })
        .split('\n')
        .map((row: string): string[] => { 
            return row.split(',')
        })
        .map((row: string[]): MatchData => {
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
