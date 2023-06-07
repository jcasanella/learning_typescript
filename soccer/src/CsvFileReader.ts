import fs from 'fs';
import { MatchKeys } from './MatchResult';

export type MatchData = [Date, string, string, number, number, MatchKeys, string];

export abstract class CsvFileReader {
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
        .map(this.mapRow);
    }

    abstract mapRow(row: string[]): MatchData; 
}
