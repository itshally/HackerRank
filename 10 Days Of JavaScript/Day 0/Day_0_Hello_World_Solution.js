/**
 * Author: itsHally
 * File: Day_0_Hello_World_Solution.js
 * Folder Path: HackerRank/10_Days_Of_JavaScript/Day_0/
 * Note: The problem statement is not originally mine. I only solved this challenge on HackerRank.
 * Source: https://www.hackerrank.com/domains/tutorials/10-days-of-javascript
 * 
 * PROBLEM
 * ------------------------------------------------------------------------------------------------
 * Overview: 10 Days of JavaScript
 * 
 * This series focuses on learning and practicing JavaScript. Each challenge comes with a tutorial article, and you can view these articles by clicking either the Topics tab along the top or the article icon in the right-hand menu.
 * 
 * Objective
 * 
 * In this challenge, we review some basic concepts that will get you started with this series. Check out the tutorial to learn more about JavaScript's lexical structure.
 * 
 * Task
 * 
 * A greeting function is provided for you in the editor below. It has one parameter, parameterVariable. Perform the following tasks to complete this challenge:
 * 
 * 1. Use console.log() to print Hello, World! on a new line in the console, which is also known as stdout or standard output. The code for this portion of the task is already provided in the editor.
 * 2. Use console.log() to print the contents of parameterVariable (i.e., the argument passed to main).
 * You've got this!
 * 
 * Input Format
 *  ==========================================================================================================
 *   Data Type |        Parameter       | Description
 *  ----------------------------------------------------------------------------------------------------------
 *    string   |    parameterVariable   |   A single line of text containing one or more space-separated words.
 *  ==========================================================================================================
 * 
 * Output Format
 * Print the following two lines of output:
 * 
 * 1. On the first line, print Hello, World! (this is provided for you in the editor).
 * 2. On the second line, print the contents of .
 * 
 * Sample Input 0
 *  Welcome to 10 Days of JavaScript!
 * 
 * Sample Output 0
 *  Hello, World!
 *  Welcome to 10 Days of JavaScript!
 * 
 * Explanation 0
 * 
 * We printed two lines of output:
 * 
 * 1. We printed the literal string Hello, World! using the code provided in the editor.
 * 2. The value of parameterVariable passed to our main function in this Sample Case was Welcome to 10 Days of JavaScript!. We then passed our variable to console.log, which printed the contents of parameterVariable.
*/


'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/**
*   A line of code that prints "Hello, World!" on a new line is provided in the editor. 
*   Write a second line of code that prints the contents of 'parameterVariable' on a new line.
*
*	Parameter:
*   parameterVariable - A string of text.
**/
function greeting(parameterVariable) {
    // This line prints 'Hello, World!' to the console:
    console.log('Hello, World!');

    // Write a line of code that prints parameterVariable to stdout using console.log:
    console.log(parameterVariable);    
}


function main() {
    const parameterVariable = readLine();
    
    greeting(parameterVariable);
}