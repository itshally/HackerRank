/**
 * Author: itsHally
 * File: Day_1_Arithmetic_Operators_Solution.js
 * Folder Path: HackerRank/10_Days_Of_JavaScript/Day_1/
 * Note: The problem statement is not originally mine. I only solved this challenge on HackerRank.
 * Source: https://www.hackerrank.com/domains/tutorials/10-days-of-javascript
 * 
 * PROBLEM
 * ------------------------------------------------------------------------------------------------
 * Objective
 * 
 * In this challenge, we practice using arithmetic operators. Check out the attached tutorial for resources.
 * 
 * Task
 * 
 * Complete the following functions in the editor below:
 * 
 *  1. getArea(length, width): Calculate and return the area of a rectangle having sides length and width.
 *  2. getPerimeter(length, width): Calculate and return the perimeter of a rectangle having sides length and width.
 * 
 * The values returned by these functions are printed to stdout by locked stub code in the editor.
 * 
 * Input Format
 * 
 *  =====================================================================
                              getArea
 *  =====================================================================
 *  Data Type | Parameter | Description
 *  ---------------------------------------------------------------------
 *   Number   |  length   | A number denoting the length of a rectangle.
 *   Number   |  height   | A number denoting the height of a rectangle.
 * 
 *  =====================================================================
 *                    getParameter(length, height)
 *  =====================================================================
 *  Data Type | Parameter | Description
 *  ---------------------------------------------------------------------
 *   Number   |  length   | A number denoting the length of a rectangle.
 *   Number   |  height   | A number denoting the height of a rectangle.
 * 
 * 
 * Constrains
 *      1 <= length, width <= 1000
 *      length and width are scaled to most three decimal places
 * 
 * Sample Input 0
 *  3
 *  4.5
 * 
 * Sample Output 0
 *  13.5
 *  15
 * 
 * Explanation
 *  The area of the rectangle is length x width = 3 x 4.5 = 13.5. 
 *  The perimeter of the rectangle is 2 x (length + width) = 2 x (3 + 4.5) = 15.
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
*   Calculate the area of a rectangle.
*
*   length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the rectangle's area.
**/
function getArea(length, width) {
    let area;
    // Write your code here
    area = length * width;
    return area;
}

/**
*   Calculate the perimeter of a rectangle.
*	
*	length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the perimeter of a rectangle.
**/
function getPerimeter(length, width) {
    let perimeter;
    // Write your code here
    perimeter = 2 * (length + width);
    return perimeter;
}


function main() {
    const length = +(readLine());
    const width = +(readLine());
    
    console.log(getArea(length, width));
    console.log(getPerimeter(length, width));
}