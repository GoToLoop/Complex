 > A complex number class including many trig functions.

 > This class is immutable in that none of its methods will change the
 > real or imaginary components, instead they return new complex objects.

 > Although the user can access the class attributes directly it is not
 > recommended as it can lead to unpredictable behaviour.

 > To retrieve the real and impaginary parts of the complex number z use
 > z.real and z.imag

 > Note that most methods can be chained, e.g. z.tan().sqrt();

 > This will calculate and return the square root of the tangent of z.
 > In mathematics we are evaluating sqrt(tan(z)) leaving z unchanged.

 > In some situations floating point errors can be significant; so testing
 > for equality or to see if the number represents a real value can be
 > problematic. By default, the maximum permitted difference is 10^-8,
 > but in some situations this may be too restrictive and reject values you
 > wish to consider equal. Use accessor Complex.epsilon to change the static
 > #epsilon property. Alternatively some methods accept an epsilon argument
 > to be used in the test, leaving the global static value unchanged.

 > Last updated: 16 Aug 2023

 > @author Peter Lager (2023)

 > https://Discourse.Processing.org/t/
 > sketch-tool-linking-js-files-from-another-server/42582

 > http://Lagers.org.uk/libs/_files/math/complex.js


## Complex
https://GitHub.com/GoToLoop/Complex

## Docs
https://GoToLoop.GitHub.io/Complex/docs
