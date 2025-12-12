JavaScript Advanced
A comprehensive collection of JavaScript exercises demonstrating advanced concepts including closures, scope, callbacks, binding, and asynchronous operations.

📋 Project Overview
This project contains 15 JavaScript files that progressively explore advanced JavaScript programming concepts. Each file builds upon fundamental concepts to demonstrate practical applications of closures, callbacks, event loop behavior, and more.

📁 Files Description
Basic Closures & Scope
0-welcome.js - Introduction to closures with nested functions that display a welcome message
1-nested_functions.js - Demonstrates scope chain with multiple nested functions accessing outer variables
2-function_me.js - Creates personalized welcome functions using closures
3-classrooms.js - Uses closures to create a classroom with student seats, each maintaining its own seat number
Practical Closures
4-math.js - Mathematical operations using closures (divideBy and addBy functions)
5-mode.js - Dynamic DOM styling with closures to create theme switcher buttons (Spooky, Dark Mode, Scream Mode)
6-hogwarts.js - Private class fields and encapsulation using ES6 class syntax with student scoring system
Asynchronous JavaScript
7-timeout.js - Demonstrates JavaScript event loop behavior with setTimeout and synchronous code execution
8-payment.js - Order processing simulation showing synchronous execution flow
Performance & Optimization
9-prime.js - Prime number calculation with performance measurement
10-prime.js - Runs prime number calculation 100 times and measures total execution time
11-prime.js - Uses setTimeout to defer prime number calculations, demonstrating event loop deferral
Function Context & Binding
12-room_area.js - Demonstrates bind() method to set this context for calculating room area
13-bind_user.js - Binds user object to function context for personalized logging
AJAX & Callbacks
14-wikipedia.js - Asynchronous XMLHttpRequest to Wikipedia API with callback function to create DOM elements
🎯 Concepts Covered
Closures: Functions that retain access to their outer scope
Lexical Scope: Variable accessibility based on where functions are defined
Callbacks: Functions passed as arguments to be executed later
Event Loop: Asynchronous execution and the call stack
Function Binding: Using bind() to set this context
Private Fields: Encapsulation using ES6 private class fields (#)
Performance Measurement: Using performance.now() for timing
DOM Manipulation: Creating and modifying HTML elements dynamically
AJAX Requests: Asynchronous data fetching with XMLHttpRequest
🚀 Usage
Each file can be run independently in a JavaScript environment:

Browser Console

// Copy and paste any file's content into the browser console
Node.js

node 0-welcome.js
node 7-timeout.js
node 9-prime.js


<!DOCTYPE html><html><head><title>JS Advanced</title></head><body>    <script src="5-mode.js"></script></body></html>
💡 Key Takeaways
Closures preserve the scope in which they were created, enabling data privacy and factory patterns
Event Loop makes JavaScript non-blocking by deferring callbacks to the task queue
Binding allows explicit control over function context (this)
Private fields in classes provide true encapsulation in modern JavaScript
Performance timing helps identify bottlenecks in code execution
📝 Notes
The studentsHogwarts class in 6-hogwarts.js uses ES6 private fields (requires modern JavaScript environment)
Prime number algorithms in 9-prime.js, 10-prime.js, and 11-prime.js are intentionally inefficient for demonstration purposes
CORS must be enabled for 14-wikipedia.js to work (Wikipedia API includes origin=* parameter)
🏫 Project Context
This project is part of the Holberton School Web Front-End curriculum, focusing on advanced JavaScript programming techniques.