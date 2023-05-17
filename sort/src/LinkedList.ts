import { Sortable } from "./Sorter";

class Node {
    next: Node | null = null;

    constructor(public value: number) {}
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
        if (!this.head) {
            throw new Error('Empty list');
        }

        const nodeLeft = this.at(leftIndex);
        const nodeRight = this.at(rightIndex);

        return nodeLeft.value > nodeRight.value;
    }
    
    swap(leftIndex: number, rightIndex: number): void {
        const prevNode = this.at(leftIndex);
        const nextNode = this.at(rightIndex);

        const temp: number = prevNode.value;
        prevNode.value = nextNode.value;
        nextNode.value = temp;
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

    at(index: number): Node {
        if (!this.head) {
            throw new Error('Index out of bounds')
        }

        let counter = 0;
        let node: Node | null = this.head;
        while (node) {
            if (counter === index) {
                return node;
            }

            counter++;
            node = node.next;
        }

        throw new Error('Index out of bounds');
    }

    print(): void {
        if (!this.head) {
            return;
        }

        let node: Node | null = this.head;
        while (node) {
            console.log(node.value);
            node = node.next;
        }
    }
}
