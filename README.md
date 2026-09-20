# Challenge 8 – Smart Delivery Route

## Overview

Smart Delivery Route is a delivery route planning system built using HTML, CSS, and JavaScript. The application uses a delivery network dataset and finds the shortest route between two locations using Dijkstra's Algorithm.

The project demonstrates how Graph Data Structures and Shortest Path Algorithms can be applied to solve real-world delivery and logistics problems.

---

## Features

* Select source location
* Select destination location
* Find shortest delivery route
* Display complete route path
* Calculate total distance
* Display number of stops
* Estimate delivery time
* Responsive user interface
* Dynamic data loading from the provided dataset

---

## Dataset Structure

The delivery network consists of:

### Locations

Each location is represented as a node.

Example:

```text
Main Warehouse
Sector 18
Pari Chowk
Knowledge Park
```

### Roads

Each road connects two locations and contains a distance value.

Example:

```text
Main Warehouse → Pari Chowk (5 km)
Pari Chowk → Knowledge Park (3 km)
```

---

## Data Structures Used

### Graph (Adjacency List)

The delivery network is represented as a graph.

```text
Location → Connected Locations
```

Example:

```text
L1 → L2 (8)
L1 → L3 (5)
L3 → L4 (3)
```

### Objects

Used for:

* Distance tracking
* Previous node tracking
* Route reconstruction

### Set

Used to maintain visited nodes during Dijkstra's Algorithm.

---

## Algorithm Used

### Dijkstra's Algorithm

The application calculates the shortest path between two selected locations.

Steps:

1. Initialize all distances as Infinity
2. Set source distance to 0
3. Select the nearest unvisited node
4. Update neighboring distances
5. Repeat until destination is reached
6. Reconstruct the shortest path

---

## Example

Input:

```text
From: Main Warehouse
To: Knowledge Park
```

Output:

```text
Main Warehouse
→ Pari Chowk
→ Knowledge Park

Distance: 8 km
Stops: 3
Estimated Time: 40 minutes
```

---

## Initial Approach

A simple solution would check every possible path between locations and compare distances.

### Time Complexity

```text
O(V² + E)
```

### Space Complexity

```text
O(V)
```

Where:

* V = Number of Locations
* E = Number of Roads

---

## Optimized Approach

The delivery network is represented using an adjacency list and shortest routes are calculated using Dijkstra's Algorithm.

### Time Complexity

```text
O(V² + E)
```

### Space Complexity

```text
O(V)
```

---

## Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)

---

## Concepts Applied

* Graph Representation
* Adjacency List
* Shortest Path Problem
* Dijkstra's Algorithm
* DOM Manipulation
* Event Handling
* Dynamic UI Rendering

---

## Learning Outcomes

Through this challenge, I learned:

* How real-world delivery systems can be modeled as graphs
* Implementing Dijkstra's Algorithm in JavaScript
* Route reconstruction using previous-node tracking
* Working with adjacency lists
* Building interactive UI with dynamic data
* Combining DSA concepts with frontend development

---

## Project Objective

The objective of this project is to efficiently determine the shortest delivery route between two locations while providing users with route details, total distance, stops, and estimated delivery time through an easy-to-use interface.
