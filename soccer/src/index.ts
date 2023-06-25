import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { Summary } from './Summary';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { HtmlReport } from './reportTargets/HtmlReport';

const matchReader = new MatchReader(new CsvFileReader('football.csv'));
matchReader.load();

const winsAnalysis = new WinsAnalysis('Man United');
const report = new HtmlReport();
const summary = new Summary(winsAnalysis, report);
summary.buildAndPrintReport(matchReader.matches);