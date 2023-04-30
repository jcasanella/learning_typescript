class Sorter {
    constructor(public collection: number[] | string) {}

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    sort(): void {
        const { length } = this.collection;

        for (let i = 0; i < length; i++) {
            for (let j=0; j < length - i - 1; j++) {
                // if collection is a number[]
                if (this.collection instanceof Array) {
                    if (this.collection[j] > this.collection[j+1]) {
                        const temp = this.collection[j];
                        this.collection[j] = this.collection[j+1];
                        this.collection[j+1] = temp;
                    }
                }

                // if collection is a string
                if (typeof this.collection === 'string') {

                }
            }
        }
    }
}

const sorter = new Sorter([1,4,2,0]);
sorter.sort();

console.log(sorter.collection);