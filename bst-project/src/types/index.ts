export interface Node {
    value: number;
    left?: Node;
    right?: Node;
}

export interface BST {
    insert(value: number): void;
    delete(value: number): void;
    find(value: number): Node | null;
    inOrderTraversal(): number[];
}