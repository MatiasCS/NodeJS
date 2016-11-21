/*Tarea
TDD de Binary Search Tree
append, max, min, height
*/
const expect = require('chai').expect;
const trees = require('./lib/bst.js');

var bst = new trees.BST();
bst.append(3);
bst.append(2);
bst.append(4);
bst.append(6);
bst.append(8);
bst.append(5);
console.log(trees.max(bst.root));
console.log(trees.min(bst.root));
console.log(trees.height(bst.root));
