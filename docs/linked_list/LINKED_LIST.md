# Linked List

Data Structure: `Non-contiguous`
Memory Allocation: `Typically allocated one by one to individual elements`, `Extra memory`
Access: `Non-Efficient`
Access: `Sequential`
Insertion/Deletion: `Efficient`
Represent by: `Head Node`

## Basic Structure

![Image](https://res.cloudinary.com/djgwvmcdl/image/upload/v1779393219/aaf4f8d5-7fe0-47f7-94d8-58854640767b.png)

## Elements

- Head
- Tail
- Node(`next pointer` + `prev pointer` + `data`)

## Types

**Singly Linked List**

![Image](https://res.cloudinary.com/djgwvmcdl/image/upload/v1779393505/dcd8a171-d7e8-4e4f-83f2-9bf5494a8856.png)

**Doubly Linked List**

![Image](https://res.cloudinary.com/djgwvmcdl/image/upload/v1779393505/dcd8a171-d7e8-4e4f-83f2-9bf5494a8856.png)

## Create Linked List

Linked Lists are made with nodes. So it should have Node

```ts
class Node {
   
    public value: any;
    public next: Node | null;

    constructor(value: any, next: Node | null = null) {
        this.value = value;
        this.next = next;
    }
};
```

Linked List represent by it's head

```ts
class LinkedList {
    private head: Node | null;
    private size: number;

    constructor() {
        this.head = null;
        this.size = 0;
    }
}
```

## Fully Workable Linked List

```ts
class Node {
   
    public value: any;
    public next: Node | null;

    constructor(value: any, next: Node | null = null) {
        this.value = value;
        this.next = next;
    }
};

class LinkedList {
    private head: Node | null;
    private size: number;

    constructor() {
        this.head = null;
        this.size = 0;
    }

    public getSize(): number {
        return this.size;
    }

    public getHead(): Node | null {
        return this.head;
    }

    public addToHead(value: any): void {
        const node = new Node(value);
        node.next = this.head;
        this.head = node;
        this.size++;
    }

    public addToTail(value: any): void {
        const node = new Node(value);
        node.next = null;
        node.value = value;
        if (!this.head) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    public addToIndex(value: any, index: number): void {
        if (index < 0 || index > this.size) {
            throw new Error("Index out of bounds");
        }
        const node = new Node(value);
        if (index === 0) {
            node.next = this.head;
            this.head = node;
        } else {
            let current = this.head;
            let previous: Node | null = null;
            let currentIndex = 0;
            while (currentIndex < index) {
                previous = current;
                current = current!.next;
                currentIndex++;
            }
            node.next = current;
            previous!.next = node;
        }
        this.size++;
    }

    public deleteNode(index: number): void {
        if (index < 0 || index >= this.size) {
            throw new Error("Index out of bounds");
        }
        let current = this.head;
        if (index === 0) {
            this.head = current!.next;
        } else {
            let previous: Node | null = null;
            let currentIndex = 0;
            while (currentIndex < index) {
                previous = current;
                current = current!.next;
                currentIndex++;
            }
            previous!.next = current!.next;
        }
        this.size--;
    }

    public getIndex(index: number): any {
        if (index < 0 || index >= this.size) {
            throw new Error("Index out of bounds");
        }
        let current = this.head;
        let currentIndex = 0;
        while (currentIndex < index) {
            current = current!.next;
            currentIndex++;
        }
        return current!.value;
    }
}


const ll = new LinkedList();
ll.addToHead(1);
ll.addToTail(2);

console.log(ll);
```