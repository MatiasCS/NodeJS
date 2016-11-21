function Node(key){
	this.key = key;
	this.left = null;
	this.right = null;
}

function BST(){
	this.root = null;
}

BST.prototype.append = function(key){

	var root = this.root;
	if(!root){
		this.root = new Node(key);
	}

	var currentNode = root;
	var nodeToAppend = new Node(key);

	 while(currentNode){
	      if(key < currentNode.key){
	          if(!currentNode.left){
	             currentNode.left = nodeToAppend;
	             break;
	          }
	          else{
	             currentNode = currentNode.left;
	        }
	     }
	     else{
	         if(!currentNode.right){
	            currentNode.right = nodeToAppend;
	            break;
	         }
	         else{
	            currentNode = currentNode.right;
	         }
	     }
	  }
}

function max(node){
	if(!node)
		console.log('Tree is empty, add a few numbers first using append method');

	if(node.right){
		return max(node.right);
	}

	return node.key;
}

function min(node){
	if(!node)
		console.log('Tree is empty, add a few numbers first using append method');

	if(node.left){
		return min(node.left);
	}

	return node.key;
}

function height(node){
   if(!node) return 0;
   var leftHeight = height(node.left);
   var rightHeight = height(node.right);

   return Math.max(leftHeight, rightHeight) + 1;
}

module.exports = {
	BST: BST,
	max: max,
	min: min,
	height:height
}