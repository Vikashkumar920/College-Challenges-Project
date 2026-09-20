# College-Challenges-Project
# Challenge 4 – Undo / Redo Cart

## Overview

This project is a Shopping Cart Management System built using HTML, CSS, and JavaScript. It allows users to add products to a cart, manage quantities, remove items, and perform Undo/Redo operations using stack-based data structures.

The project uses the provided TechMart dataset and demonstrates how Data Structures and Algorithms can be applied in real-world web applications.

---

## Features

* Display products from the dataset
* Add products to cart
* Increase product quantity
* Decrease product quantity
* Remove products from cart
* Undo previous operation
* Redo previously undone operation
* Dynamic cart updates
* Operation history tracking
* Empty cart handling
* Responsive user interface

---

## Data Structures Used

### Cart (Hash Map / Object)

Stores product IDs and their quantities.

Example:

```text
{
  "p-101": 2,
  "p-201": 1
}
```

Provides fast insertion, deletion, and updates.

### Undo Stack

Stores previous cart operations.

Examples:

```text
ADD
REMOVE
INCREASE
DECREASE
```

Used to reverse the most recent action.

### Redo Stack

Stores undone operations and allows them to be applied again.

### History List

Maintains a record of cart activities and displays them to the user.

---

## Supported Operations

### Add Product

Adds a product to the cart.

### Increase Quantity

Increases the quantity of an existing product.

### Decrease Quantity

Decreases the quantity of a product.

### Remove Product

Removes a product completely from the cart.

### Undo

Reverses the most recent cart operation.

### Redo

Reapplies the most recently undone operation.

---

## DSA Concepts Applied

* Stack
* Hash Map (JavaScript Object)
* Event-Driven Programming
* Dynamic DOM Manipulation
* State Management

---

## Example Workflow

```text
ADD Laptop
ADD Mouse
REMOVE Mouse

UNDO
→ Mouse returns to cart

REDO
→ Mouse is removed again
```

---

## Initial Approach

A basic cart system was created where products could be added, removed, and updated directly.

### Time Complexity

```text
Add Product      : O(1)
Remove Product   : O(1)
Increase Quantity: O(1)
Decrease Quantity: O(1)
```

### Space Complexity

```text
O(n)
```

where n is the number of products stored in the cart.

---

## Optimized Approach

Undo and Redo functionality were implemented using two stacks.

* Undo Stack stores performed operations.
* Redo Stack stores reverted operations.

This allows efficient reversal and reapplication of cart actions.

### Time Complexity

```text
Add Product      : O(1)
Remove Product   : O(1)
Increase Quantity: O(1)
Decrease Quantity: O(1)
Undo             : O(1)
Redo             : O(1)
```

### Space Complexity

```text
O(n)
```

---

## Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)

---

## Learning Outcomes

Through this challenge, I learned:

* Implementing stack-based Undo/Redo systems
* Managing application state using JavaScript
* Dynamic DOM updates
* Event handling
* Efficient cart management
* Applying DSA concepts in frontend development

---

## Project Objective

The objective of this project is to build an interactive shopping cart where every operation can be reversed or reapplied efficiently while maintaining a clean and user-friendly interface.
