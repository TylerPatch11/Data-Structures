#ifndef NODE_H
#define NODE_H

class Node {
public:
    int _value;
    Node* _left;
    Node* _right;
    
    Node(int value) {
        _value = value;
        _left = nullptr;
        _right = nullptr;
    }

    ~Node() {
        delete _left;
        delete _right;
    }

    void insert(int value, Node* node){
            if(value < node->_value){
                if(node->_left == nullptr){
                    Node* leafNode = new Node(value);
                    node->_left = leafNode;
                    return;
                }
                node = node->_left;
                insert(value, node);
            }else{
                if(node->_right == nullptr){
                    Node* leafNode = new Node(value);
                    node->_right = leafNode;
                    return;
                }
                node = node->_right;
                insert(value, node);
            }
    }

};

#endif