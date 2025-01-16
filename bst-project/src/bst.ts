class Node {
    value: number;
    left: Node | null;
    right: Node | null;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

export class BinarySearchTree {
    root: Node | null;

    constructor() {
        this.root = null;
    }

    insert(value: number): void {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return;
        }
        this.insertNode(this.root, newNode);
    }

    private insertNode(node: Node, newNode: Node): void {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    delete(value: number): void {
        this.root = this.deleteNode(this.root, value);
    }

    private deleteNode(node: Node | null, value: number): Node | null {
        if (node === null) {
            return null;
        }
        if (value < node.value) {
            node.left = this.deleteNode(node.left, value);
        } else if (value > node.value) {
            node.right = this.deleteNode(node.right, value);
        } else {
            if (node.left === null && node.right === null) {
                return null;
            }
            if (node.left === null) {
                return node.right;
            }
            if (node.right === null) {
                return node.left;
            }
            const minRight = this.findMinNode(node.right);
            node.value = minRight.value;
            node.right = this.deleteNode(node.right, minRight.value);
        }
        return node;
    }

    private findMinNode(node: Node): Node {
        while (node.left !== null) {
            node = node.left;
        }
        return node;
    }

    find(value: number): Node | null {
        return this.findNode(this.root, value);
    }

    private findNode(node: Node | null, value: number): Node | null {
        if (node === null) {
            return null;
        }
        if (value < node.value) {
            return this.findNode(node.left, value);
        } else if (value > node.value) {
            return this.findNode(node.right, value);
        } else {
            return node;
        }
    }

    inOrderTraversal(callback: (value: number) => void): void {
        this.inOrder(this.root, callback);
    }

    private inOrder(node: Node | null, callback: (value: number) => void): void {
        if (node !== null) {
            this.inOrder(node.left, callback);
            callback(node.value);
            this.inOrder(node.right, callback);
        }
    }
}