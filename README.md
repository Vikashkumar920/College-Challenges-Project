# College-Challenges-Project
# Challenge 4 – Undo / Redo Cart

## Overview

This project is a Mini E-Commerce Cart System built using HTML, CSS, and JavaScript. It allows users to add products to a shopping cart, manage quantities, and perform Undo/Redo operations using stack-based data structures.

The project is based on the provided TechMart dataset and demonstrates both frontend development and Data Structures & Algorithms concepts.

## Features

* Display products from the provided dataset
* Add products to cart
* Increase product quantity
* Decrease product quantity
* Remove products from cart
* Undo previous cart operation
* Redo previously undone operation
* Operation history tracking
* Responsive user interface
* Empty cart handling

## Data Structures Used

### Cart Storage

* Object (Hash Map)
* Stores product IDs and quantities
* Provides O(1) lookup and update operations

### Undo Stack

* Stores previous cart operations
* Used to reverse the most recent action

### Redo Stack

* Stores undone op
