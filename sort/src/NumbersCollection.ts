import { Sortable } from './Sorter';

export class NumbersCollection implements Sortable {
    constructor(public data: number[]) {}

    compare(leftIndex: number, rightIndex: number): boolean {
        return this.data[leftIndex] > this.data[rightIndex];
    }

    swap(leftIndex: number, rightIndex: number): void {
        const leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftHand;
    }

    get length() {
        return this.data.length;
    }
}