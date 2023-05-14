import { CharactersCollection } from "./CharactersCollection";
import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";

const sorter = new Sorter(new NumbersCollection([10,3,-5,0]));
sorter.sort();
console.log(sorter.collection);

const sorter2 = new Sorter(new CharactersCollection('zxdab'));
sorter2.sort();
console.log(sorter2.collection);