/**
 * Author: itsHally
 * File: Day_6_Bitwise_Operators_Solution.js
 * Folder Path: HackerRank/10 Days Of JavaScript/Day 6/
 * Note: The problem statement is not originally mine. I only solved this challenge on HackerRank.
 * Source: https://www.hackerrank.com/domains/tutorials/10-days-of-javascript
 * 
 * PROBLEM
 * ------------------------------------------------------------------------------------------------
 * Objective
 * Today, we're practicing bitwise operations. Check the attached tutorial for more details.
 * 
 * Task
 * We define S to be a sequence of distinct sequential integers from 1 to n; in other words, S = {1,2,3,...,n}. We want to know the maximum bitwise AND value of any two integers, a and b (where a<b), in sequence S that is also less than a given integer, k.
 * Complete the function in the editor so that given n and k, it returns the maximum a&b < k.
 * Note: The & symbol represents the bitwise AND operator.
 * 
 * Input Format
 *  The first line contains an integer, q, denoting the number of function calls. 
 *  Each of the q subsequent lines defines a dataset for a function call in the form of two space-separated integers describing the respective values of n and q.
 * 
 * Constraints
 *      1 <= q <= 10^3
 *      2 <= n <= 10^3
 *      2 <= k <= n
 * 
 * Output Format
 *  Return the maximum possible value of a & b < k for any a < b in sequence S.
 * 
 * Sample Input 0
 *  3
 *  5 2
 *  8 5
 *  2 2
 * 
 * Sample Output 0
 *  1
 *  4
 *  0
 * 
 * Explanation 0
 *  We perform the following q = 3 function calls:
 *  1. When n=5 and k=2, we have the following possible a and b values in set S={1,2,3,4,5}:
 *  
 *      a | b |              a & b
 *      ------------------------------------------
 *      1 | 2 | 001&010 = (000)base2 => (0)base10
 *      1 | 3 | 001&011 = (001)base2 => (1)base10
 *      1 | 4 | 001&100 = (000)base2 => (0)base10
 *      1 | 5 | 001&101 = (001)base2 => (1)base10
 *      2 | 3 | 010&011 = (010)base2 => (2)base10
 *      2 | 4 | 010&100 = (000)base2 => (0)base10
 *      2 | 5 | 010&101 = (000)base2 => (0)base10
 *      3 | 4 | 011&100 = (000)base2 => (0)base10
 *      3 | 5 | 011&101 = (001)base2 => (1)base10
 *      4 | 5 | 100&101 = (100)base2 => (4)base10
 * 
 *      The maximum of any a&b that is also <k is 1, so we return 1.
 *  2. When n=8 and k=5, the maximum of any a&b<k in set S={1,2,3,4,5,6,7,8} is 4(see table above), so we return 4.
 *  3. When n=2 and k=2, the maximum of any a&b<k in set S={1,2} is 0 (see table above), so we return 0.
 * 
 * Sample Input 1
 *  2
 *  9 2
 *  8 3
 * 
 * Sample Output 1
 *  1
 *  2
 * 
 * Explanation 1
 *  We perform the following q=2 function calls:
 *  1. When n=9 and k=2, the maximum of any a&b<k in set S={1,2,3,4,5,6,7,8,9} is 1 (see table above), so we return 1.
 *  2. When n=8 and k=3, the maximum of any a&b<k in set S={1,2,3,4,5,6,7,8} is 2 (see table above), so we return 2.
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

function getMaxLessThanK(n, k) { 
    if ((k-1|k) <= n) {
        return k - 1;
    } else { 
        return k - 2;
    }
}



function main() {
    const q = +(readLine());
    
    for (let i = 0; i < q; i++) {
        const [n, k] = readLine().split(' ').map(Number);
        
        console.log(getMaxLessThanK(n, k));
    }
}