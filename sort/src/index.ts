class Sorter {
    constructor(public collection: number[]) {}

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    sort(): void {}
}

const sorter = new Sorter([1,2,3]);
sorter.sort();

console.log(sorter.collection);