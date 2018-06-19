---
layout: post
title: Binary Tree Traversal
excerpt: ""
categories: [LeetCode]
tag: [Tree]
comments: true
---

## Content
* [Inorder](#1)
* [Preorder](#2)
* [Postorder](#3)
* [Level order](#4)


<h2 id='1'>94. Binary Tree Inorder Traversal</h2>

[Problem description](https://leetcode.com/problems/binary-tree-inorder-traversal/description/)

## Recursive apporach
```js
var inorderTraversal = function(root) {
    let res = [];
    if(root===null)return res;
    let inorder=function(root){
        if(root.left!==null){
            inorder(root.left);
        }
        res.push(root.val);
        if(root.right!==null){
            inorder(root.right);
        }
    }
    inorder(root);
    return res;
};
```

|Time complexity | Space complexity |
|:-------|:--------|
| O(N) | O(N) |

## Iterate using stack

Backtracking using stack

```js
var inorderTraversal = function(root) {
    let res=[];
    let stk=[];
    let curr=root;
    while(curr!==null||stk.length>0){
        if(curr!==null){
            stk.push(curr);
            curr = curr.left;
        }else{
            curr = stk.pop();
	 res.push(curr.val);
            curr = curr.right;
        }
    }
    return res;
};
```

|Time complexity | Space complexity |
|:-------|:--------|
| O(N) | O(N) |

## Morris traversal

```js
var inorderTraversal = function(root) {
    let res = [];
    let curr = root;
    while(curr!==null){
        if(curr.left===null){
            res.push(curr.val);
            curr = curr.right;
        }else{
            //save left root
            let lroot = curr.left;
            //find rightmost
            let rmost = lroot;
            while(rmost.right){
                rmost = rmost.right;
            }
            rmost.right=curr;
            curr.left=null;
            curr = lroot;
        }
    }
    
    return res;
};

```

|Time complexity | Space complexity |
|:-------|:--------|
| O(N) | O(1) |

### Threaded Binary Tree

A threaded binary tree is a binary tree variant that allows fast traversal: given a pointer to a node in a threaded tree, it is possible to cheaply find its in-order successor (and/or predecessor). [Wikipedia](https://en.wikipedia.org/wiki/Threaded_binary_tree)

### Morris traversal

```

     X
   /   \
  Y     Z
 / \   / \
A   B C   D

First, X is the root, so it is initialized as current. X has a left child, so X is made the rightmost right child of X's left subtree -- the immediate predecessor to X in an inorder traversal. So X is made the right child of B, then current is set to Y. The tree now looks like this:

    Y
   / \
  A   B
       \
        X
       / \
     (Y)  Z
         / \
        C   D

(Y) above refers to Y and all of its children, which are omitted for recursion issues. The important part is listed anyway. Now that the tree has a link back to X, the traversal continues...

 A
  \
   Y
  / \
(A)  B
      \
       X
      / \
    (Y)  Z
        / \
       C   D

Then A is outputted, because it has no left child, and current is returned to Y, which was made A's right child in the previous iteration. On the next iteration, Y has both children. However, the dual-condition of the loop makes it stop when it reaches itself, which is an indication that it's left subtree has already been traversed. So, it prints itself, and continues with its right subtree, which is B.
B prints itself, and then current becomes X, which goes through the same checking process as Y did, also realizing that its left subtree has been traversed, continuing with the Z. The rest of the tree follows the same pattern.
No recursion is necessary, because instead of relying on backtracking through a stack, a link back to the root of the (sub)tree is moved to the point at which it would be accessed in a recursive inorder tree traversal algorithm anyway -- after its left subtree has finished.

```

[reference](https://stackoverflow.com/questions/5502916/explain-morris-inorder-tree-traversal-without-using-stacks-or-recursion)

<h2 id='2'>144. Binary Tree Preorder Traversal</h2>

[Problem description](https://leetcode.com/problems/binary-tree-preorder-traversal/description)

## Iterative stack solution

```js
var preorderTraversal = function(root) {
    let res=[];
    let stk=[];
    let curr=root;
    while(curr!==null||stk.length>0){
        if(curr!==null){
            res.push(curr.val);
            stk.push(curr);
            curr = curr.left;
        }else{
            curr = stk.pop();
            curr = curr.right;
        }
    }
    return res;
};

```

## Morris traversal

```js
var preorderTraversal = function(root) {
    let res=[];
    let curr=root;
    while(curr!==null){
        //if left ltree root === null, move to right root
        if(curr.left===null){
            res.push(curr.val);
            curr = curr.right;
        }else{
            //find rightmost of left tree
            let lroot = curr.left;
            let rroot = curr.right;
            let rmost = lroot;
            while(rmost.right!==null){
                rmost = rmost.right;
            }
            //root-->ltree->(rmost of ltree)-->rtree
            curr.right = lroot;
            curr.left = null;
            rmost.right = rroot;
            if(curr.left===null){res.push(curr.val);}
            //move to ltree root
            curr = lroot;
        }
        
    }
    return res;
};
```

<h2 id='3'>145 Binary Tree Postorder Traversal</h2>

[Problem description](https://leetcode.com/problems/binary-tree-postorder-traversal/description/)

## Iterative Stack

> Equivalently this is a reversion of preorder traversal where right node is visited over left. 

```js
var postorderTraversal = function(root) {
    let res=[];
    if(root===null)return res;
    let stk=[];
    let curr = root;
    while(curr!==null||stk.length>0){
        if(curr!==null){
            stk.push(curr);
            res.unshift(curr.val);
            curr = curr.right;
        }else{
            curr = stk.pop();
            curr = curr.left;
        }
        
    }
    return res;
};
```

## Morris

```js
var postorderTraversal = function(root) {
    let res=[];
    let curr=root;
    while(curr!==null){
        //if rtree root === null, move to left root
        if(curr.right===null){
            res.unshift(curr.val);
            curr = curr.left;
        }else{
            //find leftmost of right tree
            let lroot = curr.left;
            let rroot = curr.right;
            let lmost = rroot;
            while(lmost.left!==null){
                lmost = lmost.left;
            }
            //root-->rtree->(lmost of rtree)-->ltree
            curr.left = rroot;
            curr.right = null;
            lmost.left = lroot;
            if(curr.right===null){res.unshift(curr.val);}
            //move to rtree root
            curr = rroot;
        }
        
    }
    return res;
};
```


<h2 id='4'>102 Binary Tree Level Order Traversal</h2>

[Problem description](https://leetcode.com/problems/binary-tree-level-order-traversal/description/)

```js
var levelOrder = function(root) {
    let res=[];
    if(root===null)return res;
    let stk=[{node:root, d:0}];
    while(stk.length>0){
        let curr = stk.shift();
        res[curr.d] = res[curr.d]||[];
        res[curr.d].push(curr.node.val);
        ['left','right'].forEach((child)=>{
            if(curr.node[child]!==null){
                stk.push({node:curr.node[child],d:curr.d+1});
            }
        })
    }
    return res;
};
```