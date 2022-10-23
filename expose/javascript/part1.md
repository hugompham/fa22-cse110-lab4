1. Line 9 would print: "values added: 20"
2. Line 13 would print: "final result: 20"
3. Line 9 would print: "values added: 20"
4. Line 13 would return an error because unlike var declaraction, a let declaraction limits the scope of the variable result to only the if block scope, thus making it uncallable outside of the if block. Since the first print and the declaraction of result were inside of the if block, the line 9 is able to print result.
5. There would be an error at line 7 before even reaching line 9 because it tried to change the value of the const variable result.
6. There would be an error at line 7 before even reaching line 13 because it tried to change the value of the const variable result. Even if there was no line 7, it would still give an error because the const declaraction is limited to the if block scope.
