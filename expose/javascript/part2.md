1. Line 12 would print "3", the length of prices array. Since it is a var declaraction of i, it can be called outside of the for block scope. Since the variable i is being incremented during the for loop, it will print the last value of i after the for loop which would be 2+1= 3.
2. Line 13 would print "150", the discounted price of the last price within the prices array. Since it is a var declaraction, it can be called outside of the for block scope. With every iteration, the variable discountedPrice declared to that iteration's price of interest, removing the old value and replacing with that iteration's discounted price. During the last iteration, it was finding the discounted price of $300 at 50% off so 150.
3. Line 14 would print "150", the final price of the last price within the prices array. Since it is a var declaraction, it can be called even inside of the for loop. With every iteration, the variable finalPrice changed to that iteration's price of interest, removing the old value and replacing with that iteration's discounted price. During the last iteration, it was finding the discounted price of $300 at 50% off so 150.
4. It will not print anything but it will return an array of the discounted prices by the given discount rate. [50 100 150]
5. Line 12 would give an error because the variable i is declared as a let within the for loop, thus it cannot be called outside of the for loop. Since the print call is outside of the for loop, it will give an error.
6. Line 13 would give an error because the variable discountedPrice is declared as a let within the for loop, thus it cannot be called outside of the for loop. Since the print call is outside of the for loop, it will give an error.
7. Line 14 would print "150", the final price of the last price within the prices array. Since it is a let declaraction outside of the for loop scope, it can be called. With every iteration, the variable finalPrice changed to that iteration's price of interest, removing the old value and replacing with that iteration's discounted price. During the last iteration, it was finding the discounted price of $300 at 50% off so 150.
8. It will not print anything but it will return an array of the discounted prices by the given discount rate. Since the returned variable is declared oustide of the for loop, it can be returned with the changed values. [50 100 150]
9. It will return an error because since the variable i is declared as a let, the print command cannot call it outside of its for loop block scope.
10. Line 12 would print the length variable with a value of "3". Since the variable length is declared as a constant outside of the for loop and inside of the function, the print command is able to call upon the variable.
11. It will not print anything but it will return an array of the discounted prices by the given discount rate. Since the returned variable is declared oustide of the for loop, it can be returned with the changed values. The returned variable was declared as a constant array but the content/values within it can still be changed. [50 100 150]
12. A) student.name
12. B) student['Grad Year']
12. C) student.greeting()
12. D) student["Favorite Teacher"].name
12. E) student.courseLoad[0]
13. A) '3' + 2 = '32' because 2 maps to string representation so its a concatenation of 2 strings
13. B) '3' - 2 = 1 because there's no subtraction for strings so it read 3 as a integer and minus it with 2, making it 1
13. C) 3 + null = 3 because null converted to a number of 0 and it is just 3 + 0, making it 3
13. D) '3' + null = '3null' because it reads it as a concatenation of 2 strings with null being 'null'.
13. E) true + 3 = 4 because it reads true as 1 so its 1 + 3 = 4
13. F) false + null = 0 because it reads false as 0 and null as 0 so its 0 + 0 = 0
13. G) '3' + undefined = '3undefined' because it reads undefined as a string and concatenate it with '3'
13. H) '3' - undefined = NaN because there's no subtraction for strings, thus it converts both to a number but undefined has no value making it NaN
14. A) '2' > 1 = true  because it maps '2' as the same number 2 which makes the statement 2 > 1 true.
14. B) '2' < '12' = false because it compares each other in terms of first single string, making this statement a comparison of '2' < '1' which would be false
14. C) 2 == '2' = true because it converts both to the same type and then compare each other, which can be 2 == 2, resulting in true
14. D) 2 === '2' = false because it compares it at its original state/type. Since they are different types, it will result in false.
14. E) true == 2 = false because it converts true into the number 1 and compares it with 2, making it 1 == 2, which is false.
14. F) true === Boolean(2) = true because since 2 is not 0, -0, or NaN, the boolean function result in true which is then compared with true, resulting in true.
15. == compares after converting the two variable values into the same type. === compares if both are the same type and value without converting anything.
16. Check out part2-question16.js
17. The result would be [2, 4, 6]. Within the parameter of modifyArray, we are given an array to modify and a function that is used to modify the values within the given array. First, it formed a new array that is going to contain the new changed values and get returned as the final array. For each values of the given array, the outer function is going to use the given function to modify each values. In this case, it is calling a function that doubles the value (doSomething). So it takes each values of the given array and double them.
18. Check out part2-question18.js
19. 1432