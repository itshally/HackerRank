/**********************************************************************************************
 * PROJECT: HackerrankJavaAnswers
 * 
 * AUTHOR: itshally
 * 
 * PACKAGE: easy
 * 
 * FILE: JavaDateAndTime.java
 * 
 * PROBLEM DESCRIPTION:
 
The Calendar class is an abstract class that provides methods for converting between a specific instant in time and a set of calendar fields such as YEAR, MONTH, DAY_OF_MONTH, HOUR, and so on, and for manipulating the calendar fields, such as getting the date of the next week.

You are given a date. You just need to write the method, getDay , which returns the day on that date. To simplify your task, we have provided a portion of the code in the editor.

For example, if you are given the date August 14th 2017, the method should return MONDAY as the day on that date.

[image here]

Input Format

A single line of input containing the space separated month, day and year, respectively, in MM DD YYYY format.

Constraints
2000 < year < 3000

Output Format

Output the correct day in capital letters.

Sample Input

	08 05 2015

Sample Output

	WEDNESDAY

Explanation

The day on August 5th 2015 was WEDNESDAY.
 **********************************************************************************************/
package subdomain_introduction;
import java.util.Scanner;
import java.time.LocalDate;

public class JavaDateAndTime {

	public static String getDay(String d, String m, String y){
	    LocalDate local = LocalDate.of(Integer.parseInt(y), Integer.parseInt(m), Integer.parseInt(d));
	    return local.getDayOfWeek().toString();
	}
	
	public static void main(String[] args) {
		 Scanner in = new Scanner(System.in);
	        String month = in.next();
	        String day = in.next();
	        String year = in.next();
	        
	        System.out.println(getDay(day, month, year));
	}

}
