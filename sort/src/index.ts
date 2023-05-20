import { CharactersCollection } from "./CharactersCollection";
import { NumbersCollection } from "./NumbersCollection";
import { LinkedList } from "./LinkedList";

const numbers = new NumbersCollection([10,3,-5,0]);
numbers.sort();
console.log(numbers);

const characters = new CharactersCollection('zxdab');
characters.sort();
console.log(characters);

const linked = new LinkedList();
linked.add(10);
linked.add(3);
linked.add(-5);
linked.add(0);
linked.sort();
linked.print();