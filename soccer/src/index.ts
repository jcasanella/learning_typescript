import { CsvFileReader } from './CsvFileReader';

const csvFileReader = new CsvFileReader('football.csv');
csvFileReader.read();

const MatchResult = {
    HomeWin: 'H',
    AwayWin: 'A',
    Draw: 'D'
};
type MatchKeys = typeof MatchResult[keyof typeof MatchResult];

let manUnitedWins = 0;
for (let match of csvFileReader.data) {
    if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
        manUnitedWins++;
    }

    if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
        manUnitedWins++;
    }
}

console.log(`Man United won ${manUnitedWins}`);
