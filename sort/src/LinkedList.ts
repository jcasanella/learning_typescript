import { Sortable } from "./Sorter";

class Node {
    next: Node | null;

    constructor(public readonly value: number) {
        this.next = null;
    }
}

export class LinkedList implements Sortable {
    head: Node | null = null;

    get length(): number {
        if (!this.head) {
            return 0;
        }

        let numNodes = 1;
        let tail = this.head;
        while (tail.next) {
            numNodes++;
            tail = tail.next;
        }
        return numNodes;
    }
    
    compare(leftIndex: number, rightIndex: number): boolean {
        throw new Error("Method not implemented.");
    }
    swap(leftIndex: number, rightIndex: number): void {
        throw new Error("Method not implemented.");
    }

    add(value: number): void {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            return;
        }

        let tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }
        
        tail.next = node;
    }

    at(index: number): Node {}

    print() {}
}
