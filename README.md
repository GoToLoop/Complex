# Complex Number Class 🔢

This class includes many trig functions and is **immutable**. None of its
methods will change the real or imaginary components, instead, they return
new complex objects.

To retrieve the real and imaginary parts of the complex number `z`, use
`z.real` and `z.imag`.

## Method Chaining 🔗

Most methods can be chained. For example, `z.tan().sqrt()` will calculate
and return the square root of the tangent of `z`. In mathematics, we are
evaluating `sqrt(tan(z))` leaving `z` unchanged.

## Floating Point Errors 🔍

In some situations, floating point errors can be significant. Testing for
equality or to see if the number represents a real value can be problematic.
By default, the maximum permitted difference is `10^-8`; but in some
situations, this may be too restrictive and reject values you wish to
consider equal. Use accessor `Complex.epsilon` to change the static
`#epsilon` property's default value.

> ⚠️ Notice that b/c `Complex.epsilon` is a static accessor, changing it affects
all instances of class `Complex`. As a workaround, all methods which rely on it
accept an optional `epsilon` argument to be used in the test, thus ignoring the
global static default value.

## Additional Information ℹ️

- Last updated: 16 Aug 2023
- Author: Peter Lager (2023)
- Refactored by GoToLoop (2023)

- [Complex on GitHub](https://GitHub.com/GoToLoop/Complex)
- [Documentation](https://GoToLoop.GitHub.io/Complex)

# Complex
## Summary
The code defines a class called `Complex` that represents complex numbers.
It provides various mathematical operations and utility methods
for working with complex numbers.

## Example Usage
```javascript
// Create a complex number
const z = new Complex(2, 3);

// Perform mathematical operations
const sum = z.add(new Complex(1, 1));
const product = z.mult(2);
const abs = z.abs();

// Print the complex number
console.log(z.toString());
```

## Code Analysis
### Main functionalities
- Represents complex numbers with real and imaginary parts
- Provides mathematical operations such as addition, subtraction,
  multiplication, division, exponentiation, etc.
- Supports trigonometric and hyperbolic functions for complex numbers
- Allows conversion between polar and rectangular coordinates
- Provides methods for comparing complex numbers and finding roots
___
### Methods
- `abs()`: Calculates the absolute value (modulus) of the complex number
- `add(n)`: Adds another complex number or a real number to the complex number
- `acos()`: Calculates the inverse cosine of the complex number
- `arg()`: Calculates the argument (phase) of the complex number in radians
- `asin()`: Calculates the inverse sine of the complex number
- `atan()`: Calculates the inverse tangent of the complex number
- `cbrt()`: Calculates the cube root of the complex number
- `clone()`: Creates a copy of the complex number
- `conj()`: Calculates the conjugate of the complex number
- `cos()`: Calculates the cosine of the complex number
- `cosec()`: Calculates the cosecant of the complex number
- `cosech()`: Calculates the hyperbolic cosecant of the complex number
- `cosh()`: Calculates the hyperbolic cosine of the complex number
- `cot()`: Calculates the cotangent of the complex number
- `coth()`: Calculates the hyperbolic cotangent of the complex number
- `cubed()`: Calculates the cube of the complex number
- `div(n)`: Divides the complex number by another complex number or a scalar
- `equals(z, epsilon)`: Checks if the complex number is equal to another
  complex number within a given tolerance
- `exp()`: Calculates the exponential of the complex number
- `hashCode(hash)`: Generates a hashcode for the complex number
- `isReal(epsilon)`: Checks if complex number is real within a given tolerance
- `isZero(epsilon)`: Checks if complex number is zero within a given tolerance
- `log()`: Calculates the natural logarithm of the complex number
- `mult(n)`: Multiplies the complex number by another complex number or a scalar
- `negate()`: Returns the negation of the complex number
- `norm()`: Returns the normalization of the complex number
- `pow(n)`: Returns the complex number raised to a given exponent
- `roots(n)`: Returns the nth roots of the complex number
- `sin()`: Calculates the sine of the complex number
- `sinh()`: Calculates the hyperbolic sine of the complex number
- `squared()`: Returns the square of the complex number
- `sqrt()`: Returns the square root of the complex number
- `sub(n)`: Subtracts another complex number or real number from complex number
- `tan()`: Returns the tangent of the complex number
- `tanh()`: Returns the hyperbolic tangent of the complex number
- `print(precision)`: Prints the complex number to the console
- `$(precision, $)`: Returns a string representation of the complex number
___
### Fields
- `real`: The real part of the complex number
- `imag`: The imaginary part of the complex number
- `#hashCode`: The cached hashcode for the complex number
- `#$`: The cached string representation for the complex number
___
