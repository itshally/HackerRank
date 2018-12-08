/**
 * Author: itsHally
 * File: Day_1_Let_and_Const_Solution.js
 * Folder Path: HackerRank/10_Days_Of_JavaScript/Day_1/
 * Note: The problem statement is not originally mine. I only solved this challenge on HackerRank.
 * Source: https://www.hackerrank.com/domains/tutorials/10-days-of-javascript
 * 
 * PROBLEM
 * ------------------------------------------------------------------------------------------------
 * Objective
 * In this challenge, we practice declaring variables using the let and const keywords. Check out the attached tutorial for more details.
 * 
 * Task
 * 
 * 1. Declare a constant variable, PI, and assign it the value Math.PI. You will not pass this challenge unless the variable is declared as a constant and named PI (uppercase).
 * 2. Read a number, r, denoting the radius of a circle from stdin.
 * 3. Use PI and r to calculate the area and perimeter of a circle having radius r.
 * 4. Print area as the first line of output and print perimeter as the second line of output.
 * 
 * Input Format
 * A single integer, r, denoting the radius of a circle.
 * 
 * Constraints
 *       0 < r <= 100
 *       r is a floating-point number scaled to at most 3 decimal places.
 * 
 * Output Format
 * 
 * Print the following two lines:
 *  1. On the first line, print the area of the circle having radius r.
 *  2. On the second line, print the perimeter of the circle having radius r.
 * 
 * Sample Input 0
 *  2.6
 * 
 * Sample Output 0
 *  21.237166338267002
 *  16.336281798666924
 * 
 * Explanation 0
 * Given the radius r = 2.6, we calculate the following:
 *      area = π x r^2 = 21.237166338267002
 *      perimeter = 2 x π x r = 16.336281798666924
 * We then print area as our first line of output and perimeter as our second line of output.
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

function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.  
    const PI = Math.PI;
    let r = readLine();

    // Print the area of the circle:
    let area = PI * Math.pow(r, 2);
    console.log(area);

    // Print the perimeter of the circle:
    let perimeter = 2 * PI * r;
    console.log(perimeter);
    
    try {    
        // Attempt to redefine the value of constant variable PI
        PI = 0;
        // Attempt to print the value of PI
        console.log(PI);
    } catch(error) {
        console.error("You correctly declared 'PI' as a constant.");
    }
}