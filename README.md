# Unexpected String Concatenation in JavaScript

This code demonstrates a common error in JavaScript due to its loose typing system. The `+` operator performs string concatenation when one operand is a string, even if the other is a number. 

## Bug

The `foo` function attempts to add two numbers, but because the second argument is passed as a string, the `+` operator concatenates the string and the number instead of performing arithmetic addition.

## Solution

To solve the issue, ensure both operands are numbers before performing addition.  Type checking or conversion functions can be used to resolve the unexpected behavior. 
