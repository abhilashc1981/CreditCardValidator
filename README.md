# Credit Card Validator

This is a JavaScript project, part of Codecademy's full-stack developer learning path, which checks if a credit card number is valid or not.

It has methods for the following:

* To check if a credit card number is valid or not
* To check multiple credit cards and return the invalid ones
* To return the companies that issued the invalid cards based on the number
* To convert an invalid card number to a valid card number (most complex method in this project, which was an optional requirement)

## Mechanism of the methods (only complex methods)

### Checking for a valid credit card number

The Luhn algorithm or modulus 10 algorithm is implemented. This involves:

1. From the last digit of the credit card number (check digit), moving to the left, every alternate number is multiplied by 2.
2. If the resultant product happens to be greater than 9, 9 is subtracted from it.
3. These modified numbers are summed
4. The sum is divided by 10.
5. If the remainder is zero, the credit card number is valid; otherwise, invalid.

#### Note:

Credit card numbers may have odd number of digits or even. If the number of digits is even, the check digit index will be odd. So, all even indexed credit card digits (using a credit card number as an array of numbers) have to be modified. 

On the other hand, if the number of credit card digits is odd, the check digit index will be even. So, all odd indexed credit card digits have to be modified.

### Converting invalid credit card number to valid

Basically, the Luhn algorithm has to be reversed as follows:

1. If the sum of the modifed credit card digits is not divisible by 10, it needs to be made divisible.
2. The remainder might be 1 to 9. If 9, we add 1; if 8, we add 2 etc. till adding 9 for a remainder of 1. Actually, for remainders of 4 to 1, we can subtract 4 to 1, but addition is used throughout to avoid negative numbers.
3. The two consequtive numbers to the left of the check digit are modified. Actually, even the check digit could have been modified as the credit card number is not valid but due to a confusion during implementation, it wasn't.
4. Wherever we add such that the number can become greater than or equal to 10, we subtract 10 to keep it divisible by 10.
5. When Luhn's algorithm is used to validate a credit card number, since from doubled numbers (even numbers), 9 is subtracted to make them odd, all odd digits among the modified digits were the ones subjected to this calculation.
6. So, to reverse the algorithm, 9 needs to be added to all alternate digits to the left of the check digit if they are odd.
7. All alternate digits to the left of the check digit are divided by 2 to undo the multiplication during application of the Luhn algorithm.
8. The above changes undo all changes due to the application of the Luhn algorithm, giving us a valid credit card number.

