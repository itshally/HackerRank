/**
 * Author: itsHally
 * File: Day_2_Conditional_Statements_Switch_Solution.js
 * Folder Path: HackerRank/10_Days_Of_JavaScript/Day_2/
 * Note: The problem statement is not originally mine. I only solved this challenge on HackerRank.
 * Source: https://www.hackerrank.com/domains/tutorials/10-days-of-javascript
 * 
 * PROBLEM
 * ------------------------------------------------------------------------------------------------
 * Objective
 * In this challenge, we learn about switch statements. Check out the attached tutorial for more details.
 * 
 * Task
 * Complete the getLetter(s) function in the editor. It has one parameter: a string, s, consisting of lowercase English alphabetic letters (i.e., a through z). It must return A, B, C, or D depending on the following criteria:
 *      If the first character in string s is in the set {a,e,i,o,u}, then return A.
 *      If the first character in string s is in the set {b,c,d,f,g}, then return B.
 *      If the first character in string s is in the set {h,j,k,l,m}, then return C.
 *      If the first character in string s is in the set {n,p,q,r,s,t,v,w,x,y,z}, then return D.
 * 
 * Hint: You can get the letter at some index i in s using the syntax s[i] or s.charAt(i).
 * 
 * Input Format
 * Stub code in the editor reads a single string denoting s from stdin.
 * 
 * Constraints
 *      1 <= |s| <= 100, where |s| is the length of s.
 *      String s contains lowercase English alphabetic letters (i.e., a through z) only.
 * 
 * Output Format
 * Return either A, B, C, or D according to the criteria given above.
 * 
 * Sample Input 0
 *  adfgt
 * 
 * Sample Output 0
 *  A
 * 
 * Explanation 0
 * The first character of string s = adfgt is a. Because the given criteria stipulate that we print A any time the first character is in {a,e,i,o,u}, we return A as our answer.
 * */

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

function getLetter(s) {
    let letter;
    // Write your code here
    let letterRegex = /[a-z]/;
    if (letter.match(letterRegex)) {
        switch (s.charAt(0)) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                letter = 'A';
                break;
            case 'b':
            case 'c':
            case 'd':
            case 'f':
            case 'g':
                letter = 'B';
                break;
            case 'h':
            case 'j':
            case 'k':
            case 'l':
            case 'm':
                letter = 'C';
                break;
            default:
                letter = 'D';
                break;
        }
    } else { 
        letter = "Lower case only.";
    }
  
    return letter;
}


function main() {
    const s = readLine();
    
    console.log(getLetter(s));
}
