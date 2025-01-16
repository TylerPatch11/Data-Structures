#include <iostream>
#include "bst.cpp"

void testInsert() {
    BinarySearchTree bst;
    bst.insert(10);
    bst.insert(5);
    bst.insert(15);
    std::cout << "Insert test passed." << std::endl;
}

void testFind() {
    BinarySearchTree bst;
    bst.insert(10);
    bst.insert(5);
    bst.insert(15);
    if (bst.find(10) && bst.find(5) && bst.find(15) && !bst.find(20)) {
        std::cout << "Find test passed." << std::endl;
    } else {
        std::cout << "Find test failed." << std::endl;
    }
}

void testDelete() {
    BinarySearchTree bst;
    bst.insert(10);
    bst.insert(5);
    bst.insert(15);
    bst.deleteNode(10);
    if (!bst.find(10) && bst.find(5) && bst.find(15)) {
        std::cout << "Delete test passed." << std::endl;
    } else {
        std::cout << "Delete test failed." << std::endl;
    }
}

void testInOrderTraversal() {
    BinarySearchTree bst;
    bst.insert(10);
    bst.insert(5);
    bst.insert(15);
    std::vector<int> result = bst.inOrderTraversal();
    std::vector<int> expected = {5, 10, 15};
    if (result == expected) {
        std::cout << "InOrderTraversal test passed." << std::endl;
    } else {
        std::cout << "InOrderTraversal test failed." << std::endl;
    }
}

int main() {
    testInsert();
    testFind();
    testDelete();
    testInOrderTraversal();
    return 0;
}