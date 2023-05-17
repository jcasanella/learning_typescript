import { CharactersCollection } from "./CharactersCollection";
import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";
import { LinkedList } from "./LinkedList";

const sorter = new Sorter(new NumbersCollection([10,3,-5,0]));
sorter.sort();
console.log(sorter.collection);

const sorter2 = new Sorter(new CharactersCollection('zxdab'));
sorter2.sort();
console.log(sorter2.collection);

const linked = new LinkedList();
linked.add(10);
linked.add(3);
linked.add(-5);
linked.add(0);
const sorter3 = new Sorter(linked);
sorter3.sort();
linked.print();