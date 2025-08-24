Big Bang Script
This repository contains a simple JavaScript script that solves a programming challenge. The script generates an array of numbers from 1 to 100, replacing specific numbers based on their divisibility by 3 and 5.

Problem Description
The script iterates through numbers from 1 to 100 and applies the following rules:
     - If a number is divisible by 3, it is replaced with the word "BIG".
     - If a number is divisible by 5, it is replaced with the word "BANG".
     - If a number is divisible by both 3 and 5, it is replaced with the word "BIGBANG".
     - Otherwise, the number is converted to a string.
     The final result is an array that is saved to a file named output.json.
     
Prerequisites
To run this script, you must have Node.js installed on your machine. You can download it from the official website.

How to Run the Script
1. Clone the Repository: If this code is in a Git repository, clone it to your local machine using a command like:
git clone [your-repo-url]
cd [your-repo-folder]
2. Save the Script: Save the provided JavaScript code into a file named bigbang.js.
3. Run the Script: Open your terminal or command prompt, navigate to the directory where you saved bigbang.js, and run the following command:node bigbang.js
4. Check the Output: After running the command, a new file named output.json will be created in the same directory. This file will contain the generated array.