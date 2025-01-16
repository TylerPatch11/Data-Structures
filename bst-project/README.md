# Binary Search Tree Project

This project implements a Binary Search Tree (BST) in TypeScript. It provides a class `BinarySearchTree` with methods for inserting, deleting, finding, and traversing nodes in the tree.

## Project Structure

```
bst-project
├── src
│   ├── bst.ts          # Implementation of the Binary Search Tree
│   └── types
│       └── index.ts    # Type definitions for Node and BST
├── package.json        # npm configuration file
├── tsconfig.json       # TypeScript configuration file
└── README.md           # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd bst-project
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To use the Binary Search Tree implementation, you can import the `BinarySearchTree` class from `src/bst.ts` and create an instance of it. You can then use the provided methods to manipulate the tree.

### Example

```typescript
import { BinarySearchTree } from './src/bst';

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
console.log(bst.inOrderTraversal()); // Output: [5, 10, 15]
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.