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
By default, the maximum permitted difference is `10^-8`, but in some
situations, this may be too restrictive and reject values you wish to
consider equal. Use accessor `Complex.epsilon` to change the static
`#epsilon` property's default value.

> ⚠️ Notice that b/c `Complex.epsilon` is a static property, changing it affects
all instances of class `Complex`. As a workaround, all methods which rely on it
accept an optional `epsilon` argument to be used in the test, thus ignoring the
global static value.

## Additional Information ℹ️

- Last updated: 16 Aug 2023
- Author: Peter Lager (2023)
- Refactored by GoToLoop

- [Complex on GitHub](https://GitHub.com/GoToLoop/Complex)
- [Documentation](https://GoToLoop.GitHub.io/Complex)
