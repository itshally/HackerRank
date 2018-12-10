/**
 * Author: itsHally
 * File: Day_5_Template_Literals_Solution.js
 * Folder Path: HackerRank/10 Days Of JavaScript/Day 5/
 * Note: The problem statement is not originally mine. I only solved this challenge on HackerRank.
 * Source: https://www.hackerrank.com/domains/tutorials/10-days-of-javascript
 * 
 * PROBLEM
 * ------------------------------------------------------------------------------------------------
 * Objective
 * In this challenge, we practice using JavaScript Template Literals. Check the attached tutorial for more details.
 * 
 * Task
 * The code in the editor has a tagged template literal that passes the area and perimeter of a rectangle to a tag function named sides. Recall that the first argument of a tag function is an array of string literals from the template, and the subsequent values are the template's respective expression values.
 * 
 * Complete the function in the editor so that it does the following:
 *  1. Finds the initial values of s1 and s2 by plugging the area and perimeter values into the formula:
 *          s = (P +- √(P^2) - (16 * A)) / 4
 *     where A is the rectangle's area and P is its perimeter.
 *  2. Creates an array consisting of s1 and s2 and sorts it in ascending order.
 *  3. Returs the sorted array.
 * 
 * Input Format
 *  The first line contains an integer denoting s1. 
 *  The second line contains an integer denoting s2.
 * 
 * Constraints
 *      1 <= s1,s2 <= 100
 * 
 * Output Format
 *  Return an array consisting of s1 and s2, sorted in ascending order.
 * 
 * Sample Input 0
 *  10
 *  14
 * 
 * Sample Output 0
 *  14
 *  10
 * 
 * Explanation 0
 *  The locked code in the editor passes the following arrays to the tag function:
 *      - The value of literals is [ 'The area is: ', '.\nThe perimeter is: ', '.' ].
 *      - The value of expressions is [ 140, 48 ], where the first value denotes the rectangle's area, A, and the second value denotes its perimeter, P.
 *  When we plug those values into our formula, we get the following:
 * 
 *      s1 = (P + √(P^2) - (16 * A)) / 4 
 *         = (48 + √(48^2) - (16 * 140)) / 4
 *         = (48 + 8) / 4
 *         = 14
 * 
 *      s2 = (P - √(P^2) - (16 * A)) / 4 
 *         = (48 - √(48^2) - (16 * 140)) / 4
 *         = (48 - 8) / 4
 *         = 10
 * 
 * We then store these values in an array, [14, 10], sort the array, and return the sorted array, [10, 14], as our answer.
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

/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 * 
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */
function sides(literals, ...expressions) {
    let A = expressions[0];
    let P = expressions[1];

    let s1 = (P + Math.sqrt(Math.pow(P, 2) - (16 * A))) / 4;
    let s2 = (P - Math.sqrt(Math.pow(P, 2) - (16 * A))) / 4;    

    return ([s1, s2].sort());
}

function main() {
    let s1 = +(readLine());
    let s2 = +(readLine());
    
    [s1, s2] = [s1, s2].sort();
    
    const [x, y] = sides`The area is: ${s1 * s2}.\nThe perimeter is: ${2 * (s1 + s2)}.`;
    
    console.log((s1 === x) ? s1 : -1);
    console.log((s2 === y) ? s2 : -1);
}