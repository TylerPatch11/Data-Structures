#include <iostream>
#include "node.h"

int main() {
    Node* node = new Node(20);
    Node* root = node;
    
    // Additional code to test the Node class
    delete node;
    return 0;
}