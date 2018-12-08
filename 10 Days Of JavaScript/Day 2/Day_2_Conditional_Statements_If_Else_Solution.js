/**
 * Author: itsHally
 * File: Day_2_Conditional_Statements_If_Else_Solution.js
 * Folder Path: HackerRank/10_Days_Of_JavaScript/Day_2/
 * Note: The problem statement is not originally mine. I only solved this challenge on HackerRank.
 * Source: https://www.hackerrank.com/domains/tutorials/10-days-of-javascript
 * 
 * PROBLEM
 * ------------------------------------------------------------------------------------------------
 * Objective
 * In this challenge, we learn about if-else statements. Check out the attached tutorial for more details.
 * 
 * Task
 * Complete the getGrade(score) function in the editor. It has one parameter: an integer, score, denoting the number of points Julia earned on an exam. It must return the letter corresponding to her grade according to the following rules:
 *      if 25 < score <= 30, then grade = A
 *      if 20 < score <= 25, then grade = B
 *      if 15 < score <= 20, then grade = C
 *      if 10 < score <= 15, then grade = D
 *      if 5 < score <= 10, then grade = E
 *      if 0 < score <= 5, then grade = F
 * 
 * Input Format
 * Stub code in the editor reads a single integer denoting score from stdin and passes it to the function.
 * 
 * Constraints
 *      0 <= score <= 30
 * 
 * Sample Input 0
 *  11
 * 
 * Sample Output 0
 *  D
 * 
 * Explanation 0
 * Because score = 11, it satisfies the condition 10 < score <= 15 (which corresponds to D). Thus, we return D as our answer.
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

function getGrade(score) {
    let grade;
    // Write your code here
    if (score > 25) {
        return "A";
    } else if (score > 20) {
        return "B";
    } else if (score > 15) {
        return "C";
    } else if (score > 10) {
        return "D";
    } else if (score > 5) {
        return "E";
    } else { 
        return "F";
    }
    return grade;
}


function main() {
    const score = +(readLine());
    
    console.log(getGrade(score));
}
