/**
 * @typedef {{real: number, imag: number}} Cobj
 * An object representing a complex number with real and imaginary parts.
 */
/**
 * @typedef {Int8Array | Uint8Array | Uint8ClampedArray | Int16Array |
 * Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array |
 * BigInt64Array | BigUint64Array} TypedArray
 * A union type representing all possible TypedArrays.
 */
/**
 * @template {Typed<TypedArray>} T
 * @typedef {T} Typed A generic type representing a TypedArray.
 */
/**
 * @template T
 * @typedef {function(new:T, ...any)} Newable
 * A constructor type that can be instantiated with the `new` keyword.
 */
/**
 * @typedef {function(new:Complex, number, number)} TC
 * A constructor for typeof Complex.
 * @param {number} [re=0] The real part of the complex number.
 * @param {number} [im=0] The imaginary part of the complex number.
 */
/**
 * @template {Ctor<TC>} C
 * @typedef {C} Ctor A generic type representing a `Complex` constructor.
 */
/**
 * @template {TC} C
 * @typedef {InstanceType<C>} Cinst
 * A generic type representing an instance of a constructor `Complex`.
 */
/**
 * @template {Ctor<TC>} C
 * @typedef {Ctor<C> | {} | void} Cvoid
 * A union type representing either a constructor `Complex`, an object, or void.
 * Used to hint that a static method can also be invoked "bare".
 */
/**
 * Type of callback Complex.compare().
 * @callback Compare
 * @param {Complex} a The first complex number to compare.
 * @param {Cobj} b The second complex number to compare.
 * @return {number} -1 if a < b, 0 if a == b, or +1 if a > b.
 */
/**
 * An immutable complex number class with real and imaginary parts.
 * @class Complex
 */
export default class Complex {
    /**
     * A property descriptor object that defines a property as read-only
     * by setting its attribute writable to false.
     * @protected
     * @static
     * @readonly
     * @const {PropertyDescriptor}
     */
    protected static readonly _READONLY: Readonly<{
        writable: false;
    }>;
    /**
     * Map of property descriptors that define the real & imag properties of a
     * Complex object as read-only; so instances of class Complex are immutable.
     * @protected
     * @static
     * @readonly
     * @const {PropertyDescriptorMap}
     */
    protected static readonly _IMMUTABLE: Readonly<{
        real: Readonly<{
            writable: false;
        }>;
        imag: Readonly<{
            writable: false;
        }>;
    }>;
    /**
     * Property's name to check if an object is a TypedArray.
     * @protected
     * @static
     * @readonly
     * @const {'BYTES_PER_ELEMENT'}
     */
    protected static readonly _TYPED: "BYTES_PER_ELEMENT";
    /**
     * Static property's name to check if some constructor is of type Complex.
     * @protected
     * @static
     * @readonly
     * @const {'fromRI'}
     */
    protected static readonly _METHOD: "fromRI";
    /**
     * A Float64Array buffer used to store the binary representation of the
     * real or imaginary part of a complex number for hashcode computation.
     * @protected
     * @static
     * @readonly
     * @type {Float64Array}
     */
    protected static readonly _hashFBuf: Float64Array;
    /**
     * A Uint8Array buffer view that shares the same memory block as _hashFBuf,
     * used to access the individual bytes of the real or imaginary part of a
     * complex number for hashcode computation.
     * @protected
     * @static
     * @readonly
     * @type {Uint8Array}
     */
    protected static readonly _hashIBuf: Uint8Array;
    /**
     * A complex number representing zero.
     * @static
     * @readonly
     * @const {Complex}
     */
    static readonly ZERO: Complex;
    /**
     * A complex number representing 1 + 0i.
     * @static
     * @readonly
     * @const {Complex}
     */
    static readonly _1_0i: Complex;
    /**
     * A complex number representing -1 + 0i.
     * @static
     * @readonly
     * @const {Complex}
     */
    static readonly _1_0i_neg: Complex;
    /**
     * A complex number representing 0 + 1i.
     * @static
     * @readonly
     * @const {Complex}
     */
    static readonly _0_1i: Complex;
    /**
     * A complex number representing 0 - 1i.
     * @static
     * @readonly
     * @const {Complex}
     */
    static readonly _0_1i_neg: Complex;
    /**
     * Pi. Ratio of the circumference of a circle to its diameter.
     * @static
     * @readonly
     * @const {3.141592653589793}
     */
    static readonly PI: 3.141592653589793;
    /**
     * Tau. Ratio of the circumference of a circle to its radius (2pi).
     * @static
     * @readonly
     * @const {6.283185307179586}
     */
    static readonly TAU: 6.283185307179586;
    /**
     * The conversion factor from radians to degrees (180 / Math.PI).
     * @static
     * @readonly
     * @const {57.29577951308232}
     */
    static readonly RAD_TO_DEG: 57.29577951308232;
    /**
     * The conversion factor from degrees to radians (Math.PI / 180).
     * @static
     * @readonly
     * @const {.017453292519943295}
     */
    static readonly DEG_TO_RAD: 0.017453292519943295;
    /**
     * The default maximum difference allowed when testing complex numbers.
     * @type {number}
     * @default
     */
    static "__#1@#epsilon": number;
    /**
     * Set the default maximum difference allowed when testing complex numbers.
     * @static
     * @param {number} norm The max diff allowed. Must be > 0 and < 1.
     * @throws {RangeError} If epsilon to be set is <= 0 or >=1.
     */
    static set epsilon(arg: number);
    /**
     * Get the default maximum difference allowed when testing complex numbers.
     * @static
     * @return {number} The maximum difference allowed.
     */
    static get epsilon(): number;
    /**
     * Convert an angle in radians to degrees.
     * @static
     * @param {number} rad The angle in radians.
     * @return {number} The angle in degrees.
     */
    static toDeg(rad: number): number;
    /**
     * Convert an angle in degrees to radians.
     * @static
     * @param {number} deg The angle in degrees.
     * @return {number} The angle in radians.
     */
    static toRad(deg: number): number;
    /**
     * Callback for comparing 2 complex numbers by their real & imaginary parts.
     * @static
     * @param {Complex} a The first complex number to compare.
     * @param {Cobj} b The second complex number to compare.
     * @return {number} -1 if a < b, 0 if a == b, or +1 if a > b.
     */
    static compare(a: Complex, b: Cobj): number;
    /**
     * Returns a new array with the elements sorted by their real value.
     * Numbers w/ same real value are then sorted by their imaginary value.
     * The original array or iterable is unchanged.
     * @static
     * @template {Cinst<TC>} I Instance of Complex type.
     * @param {Iterable<I>} z The original array or iterable.
     * @param {Compare} [sort=Complex.compare] The sorting callback.
     * @return {I[]} A new sorted array.
     */
    static sort<I extends Complex>(z: Iterable<I>, sort?: Compare | undefined): I[];
    /**
     * @template {Typed<TypedArray>} T Specific type of the passed TypedArray.
     * @overload
     * @param {T} arr The TypedArray to clone.
     * @return {T} A new TypedArray of same datatype containing
     * the elements of the input TypedArray.
     *
     */
    static arrClone<T extends TypedArray>(arr: T): T;
    /**
     * @template A The type of elements in the Array or Iterable object.
     * @overload
     * @param {Iterable<A>} arr The Array or Iterable object to clone.
     * @return {A[]} A new Array containing the elements of the input Array
     * or Iterable object.
     */
    static arrClone<A>(arr: Iterable<A>): A[];
    /**
     * Check if a function is a Complex datatype constructor.
     * @protected
     * @static
     * @template {Ctor<TC>} C Extends typeof Complex.
     * @param {Cvoid<C>} c The constructor function to check.
     * @return {c is Newable<Cinst<C>>}
     * True if param c is or inherits from Complex class.
     */
    protected static _isComplex<C extends TC>(c: Cvoid<C>): c is Newable<InstanceType<C>>;
    /**
     * Get input constructor c if typeof Complex; or fallback to Complex.
     * @protected
     * @static
     * @template {Ctor<TC>} C Extends typeof Complex.
     * @template {Newable<Cinst<C>>} N Constructor for typeof Complex.
     * @param {Cvoid<C>} c The constructor function to verify.
     * @return {N} Param c if type Complex; otherwise a Complex constructor.
     */
    protected static _ctor<C_1 extends TC, N extends Newable<InstanceType<C_1>>>(c: Cvoid<C_1>): N;
    /**
     * Create a new instance of a given Complex constructor function.
     * @protected
     * @static
     * @template {Ctor<TC>} C Extends typeof Complex.
     * @param {Cvoid<C>} c An existing Complex constructor.
     * @param {*} args Real & imaginary number parts.
     * @return {Cinst<C>} A new instance of a complex number.
     */
    protected static _new<C_2 extends TC>(c: Cvoid<C_2>, ...args: any): InstanceType<C_2>;
    /**
     * Return a complex number given values for the real & imaginary parts.
     * @static
     * @template {Ctor<TC>} C Extends typeof Complex.
     * @this {Cvoid<C>} Constructor for a Complex object or its subclass.
     * @param {number} [re=0] The real part.
     * @param {number} [im=0] The imaginary part.
     * @param {*} _args Extended parameters.
     * @return {Cinst<C>} The complex number of given real & imaginary parts.
     */
    static fromRI<C_3 extends TC>(this: Cvoid<C_3>, re?: number | undefined, im?: number | undefined, ..._args: any): InstanceType<C_3>;
    /**
     * Return a new complex number using given object's props real & imag.
     * @static
     * @template {Ctor<TC>} C Extends typeof Complex.
     * @this {Cvoid<C>} Constructor for a Complex object or its subclass.
     * @param {Cobj} z The Complex object to copy from.
     * @param {*} _args Extended parameters.
     * @return {Cinst<C>} Duplicate of the given Complex object.
     */
    static fromZ<C_4 extends TC>(this: Cvoid<C_4>, { real, imag }: Cobj, ..._args: any): InstanceType<C_4>;
    /**
     * Return a complex number given polar coordinates.
     * @static
     * @template {Ctor<TC>} C Extends typeof Complex.
     * @this {Cvoid<C>} Constructor for a Complex object or its subclass.
     * @param {number} mod The length of the complex number.
     * @param {number} rad The angle subtended by the number.
     * @param {*} _args Extended parameters.
     * @return {Cinst<C>} Complex of given length & orientation.
     */
    static fromPolar<C_5 extends TC>(this: Cvoid<C_5>, mod: number, rad: number, ..._args: any): InstanceType<C_5>;
    /**
     * Return a complex number of a given size but random orientation.
     * @static
     * @template {Ctor<TC>} C Extends typeof Complex.
     * @this {Cvoid<C>} Constructor for a Complex object or its subclass.
     * @param {number} [mod=1] The length of the complex number.
     * @param {*} _args Extended parameters.
     * @return {Cinst<C>} Complex of given length & random orientation.
     */
    static fromRandom<C_6 extends TC>(this: Cvoid<C_6>, mod?: number | undefined, ..._args: any): InstanceType<C_6>;
    /**
     * Given an array of complex numbers return a new array containing a clone
     * of those that represent real numbers. The original array is unchanged.
     * @static
     * @template {Ctor<TC>} C Extends typeof Complex.
     * @this {Cvoid<C>} Constructor for a Complex object or its subclass.
     * @param {Iterable<Complex>} z The original array or iterable.
     * @param {number} [epsilon=Complex.epsilon] Max diffference allowed.
     * @param {*} _args Extended parameters.
     * @return {Array<Cinst<C>>} Array of Complex representing real numbers.
     */
    static filterRealRoots<C_7 extends TC>(this: Cvoid<C_7>, z: Iterable<Complex>, epsilon?: number | undefined, ..._args: any): InstanceType<C_7>[];
    /**
     * If the original array contains more than 1 element the new array is
     * returned with duplicates removed leaving just unique vales.
     * In all cases a clone is returned and the original array is unchanged.
     * @static
     * @template {Cinst<TC>} I Instance of Complex type.
     * @param {Iterable<I>} z The original array or iterable.
     * @param {number} [epsilon=Complex.epsilon] Max diffference allowed.
     * @return {I[]} A new array with duplicates removed.
     */
    static removeDuplicates<I_1 extends Complex>(z: Iterable<I_1>, epsilon?: number | undefined): I_1[];
    /**
     * Create a new instance of the Complex class.
     * @constructor
     * @param {number} [re=0] The real part of the complex number.
     * @param {number} [im=0] The imaginary part of the complex number.
     */
    constructor(re?: number | undefined, im?: number | undefined);
    /**
     * The real part of the complex number.
     * @readonly
     * @const
     * @member {number}
     */
    readonly real: number;
    /**
     * The imaginary part of the complex number.
     * @readonly
     * @const
     * @member {number}
     */
    readonly imag: number;
    /**
     * The prototype object of this instance.
     * @type {this}
     */
    __proto__: this;
    /**
     * Compute the absolute value (modulus or magnitude) of this complex number.
     * @return {number} The absolute length value of this complex number.
     */
    abs(): number;
    /**
     * Compute the squared absolute value of this complex number.
     * @return {number} The squared absolute value of this complex number.
     */
    abs_squared(): number;
    /**
     * Add another complex number or a real number to this complex number.
     * @param {Cobj | number} n The complex or real number to add.
     * @return {this} A new complex number representing the sum.
     */
    add(n: Cobj | number): this;
    /**
     * Calculate the inverse cosine of this complex number.
     * @return {this} A new complex number representing the result.
     */
    acos(): this;
    /**
     * Calculate the inverse hyperbolic cosine of this complex number.
     * @return {this} A new complex number representing the result.
     */
    acosh(): this;
    /**
     * Calculate the argument (phase) of this complex number in radians.
     * @return {number} The argument of this complex number in radians.
     */
    arg(): number;
    /**
     * Calculate the inverse sine of this complex number.
     * @return {this} A new complex number representing the result.
     */
    asin(): this;
    /**
     * Calculate the inverse hyperbolic sine of this complex number.
     * @return {this} A new complex number representing the result.
     */
    asinh(): this;
    /**
     * Calculate the inverse tangent of this complex number.
     * @return {this} A new complex number representing the result.
     */
    atan(): this;
    /**
     * Calculate the inverse hyperbolic tangent of this complex number.
     * @return {this} A new complex number representing the result.
     */
    atanh(): this;
    /**
     * Calculate the cube root of this complex number.
     * @return {this} A new complex number representing the result.
     */
    cbrt(): this;
    /**
     * Creates a copy of the same type as this complex instance.
     * Although it's unnecessary given a Complex object is already immutable.
     * @return {this} A new complex object with the same real and imaginary
     * values as this instance.
     */
    clone(): this;
    /**
     * Calculate the conjugate of this complex number.
     * @return {this} A new complex number representing the conjugate.
     */
    conj(): this;
    /**
     * This method compares this complex number with another.
     * The main purpose of this is to define an appropriate sort order.
     * Returns:
     *  Zero if the numbers are the same when using the equals method.
     *  Negative if considered less than z.
     *  Positive if considered larger than z.
     * @param {Cobj} z the complex number to compare with.
     * @return {number} -1, 0 or +1
     */
    compareTo(z: Cobj): number;
    /**
     * Calculate the cosine of this complex number.
     * @return {this} A new complex number representing the result.
     */
    cos(): this;
    /**
     * Calculate the cosecant of this complex number.
     * @return {this} A new complex number representing the result.
     */
    cosec(): this;
    /**
     * Calculate the hyperbolic cosecant of this complex number.
     * @return {this} A new complex number representing the result.
     */
    cosech(): this;
    /**
     * Calculate the hyperbolic cosine of this complex number.
     * @return {this} A new complex number representing the result.
     */
    cosh(): this;
    /**
     * Returns the cotangent of this complex number.
     * @return {this} The cotangent of this complex number.
     */
    cot(): this;
    /**
     * Returns the hyperbolic cotangent of this complex number.
     * @return {this} The hyperbolic cotangent of this complex number.
     */
    coth(): this;
    /**
     * Returns the cube of this complex number.
     * @return {this} The cube of this complex number.
     */
    cubed(): this;
    /**
     * Divides this complex number by another complex number or a scalar.
     * @param {(Cobj | number)} n The divisor.
     * @return {this} The quotient of the division.
     */
    div(n: (Cobj | number)): this;
    /**
     * Checks if this complex number is equal to another complex number within
     * a given tolerance.
     * @param {Cobj} z The other complex number to compare with.
     * @param {number} [epsilon=Complex.epsilon] The tolerance for equality.
     * @return {boolean} True if the two numbers are equal within the given
     * tolerance, false otherwise.
     */
    equals({ real, imag }: Cobj, epsilon?: number | undefined): boolean;
    /**
     * Returns the exponential of this complex number.
     * @return {this} The exponential of this complex number.
     */
    exp(): this;
    /**
     * Generates a hashcode for this complex number.
     * @param {number} [hash=17] Optional initial seed for the hashcode.
     * @return {number} The hashcode for this complex number.
     */
    hashCode(hash?: number | undefined): number;
    /**
     * Checks if this complex number is real within a given tolerance.
     * @param {number} [epsilon=Complex.epsilon] The tolerance for checking
     * if the imaginary part is zero.
     * @return {boolean} True if the imaginary part is zero within the given
     * tolerance, false otherwise.
     */
    isReal(epsilon?: number | undefined): boolean;
    /**
     * Checks if this complex number is zero within a given tolerance.
     * @param {number} [epsilon=Complex.epsilon] The tolerance for checking
     * if both the real and imaginary parts are zero.
     * @return {boolean} True if both the real and imaginary parts are zero
     * within the given tolerance, false otherwise.
     */
    isZero(epsilon?: number | undefined): boolean;
    /**
     * Returns the natural logarithm of this complex number.
     * @return {this} The natural logarithm of this complex number.
     */
    log(): this;
    /**
     * Multiplies this complex number by another complex number or a scalar.
     * @param {(Cobj | number)} n The multiplicand.
     * @return {this} The product of the multiplication.
     */
    mult(n: (Cobj | number)): this;
    /**
     * Returns the half (divided by 2) of this complex number.
     * @return {this} Half of this complex number.
     */
    half(): this;
    /**
     * Returns the negation of this complex number.
     * @return {this} The negation of this complex number.
     */
    negate(): this;
    /**
     * Returns the normalization of this complex number.
     * @return {this} The normalization of this complex number.
     */
    norm(): this;
    /**
     * Returns the power of this complex number raised to another complex
     * number or a scalar.
     * @param {(Cobj | number)} n The exponent.
     * @return {this} Power of this complex number raised to given exponent.
     */
    pow(n: (Cobj | number)): this;
    /**
     * Returns the nth roots of this complex number (min 1).
     * @param {number} [n=1] The degree of the roots.
     * @return {this[]} An array containing the nth roots of this
     * complex number.
     */
    roots(n?: number | undefined): this[];
    /**
     * Returns the sine of this complex number.
     * @return {this} The sine of this complex number.
     */
    sin(): this;
    /**
     * Returns the hyperbolic sine of this complex number.
     * @return {this} The hyperbolic sine of this complex number.
     */
    sinh(): this;
    /**
     * Returns the square of this complex number.
     * @return {this} The square of this complex number.
     */
    squared(): this;
    /**
     * Returns the square root of this complex number.
     * @return {this} The square root of this complex number.
     */
    sqrt(): this;
    /**
     * Subtracts another complex or a real number from this complex number.
     * @param {(Cobj | number)} n The subtrahend.
     * @return {this} The difference between the two numbers.
     */
    sub(n: (Cobj | number)): this;
    /**
     * Returns the tangent of this complex number.
     * @return {this} The tangent of this complex number.
     */
    tan(): this;
    /**
     * Returns the hyperbolic tangent of this complex number.
     * @return {this} The hyperbolic tangent of this complex number.
     */
    tanh(): this;
    /**
     * Prints this complex number to the console.
     * @param {number} [precision=16] Number of significant digits to display.
     * @return {this} This complex number.
     * @chainable
     */
    print(precision?: number | undefined): this;
    /**
     * Returns a string representation of this complex number.
     * @param {number} [precision=16] Number of significant digits to display.
     * @return {string} A string representation of this complex number.
     */
    $(precision?: number | undefined): string;
    /**
     * Returns a string representation of this complex number.
     * @return {string} A string representation of this complex number.
     */
    toString(): string;
    /**
     * Compute the absolute value (modulus or magnitude) of this complex number.
     * @method mod
     * @memberof Complex
     * @instance
     * @return {number} The absolute length value of this complex number.
     */
    mod: () => number;
    /**
     * Compute the squared absolute value of this complex number.
     * @method modSq
     * @memberof Complex
     * @instance
     * @return {number} The squared absolute value of this complex number.
     */
    modSq: () => number;
    /**
     * Returns the name of the constructor of this complex number.
     * @return {string} The name of the constructor of this complex number.
     */
    get [Symbol.toStringTag](): string;
    /**
     * Converts this complex number to a primitive value.
     * @param {'default' | 'number' | 'string'} hint Type hint for conversion.
     * @return {number | string} The primitive value of this complex number.
     */
    [Symbol.toPrimitive](hint: 'default' | 'number' | 'string'): number | string;
    /**
     * Gets an iterator for the real and imaginary parts of this complex number.
     * @generator
     * @yield {number}
     * @return {IterableIterator<number>}
     * An iterator for the real and imaginary parts of this complex number.
     */
    [Symbol.iterator](): IterableIterator<number>;
    #private;
}
/**
 * An object representing a complex number with real and imaginary parts.
 */
export type Cobj = {
    real: number;
    imag: number;
};
/**
 * A union type representing all possible TypedArrays.
 */
export type TypedArray = Int8Array | Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array | BigInt64Array | BigUint64Array;
/**
 * A generic type representing a TypedArray.
 */
export type Typed<T extends TypedArray> = T;
/**
 * A constructor type that can be instantiated with the `new` keyword.
 */
export type Newable<T> = new (...args: any[]) => T;
/**
 * A constructor for typeof Complex.
 */
export type TC = new (arg1: number, arg2: number) => Complex;
/**
 * A generic type representing a `Complex` constructor.
 */
export type Ctor<C extends TC> = C;
/**
 * A generic type representing an instance of a constructor `Complex`.
 */
export type Cinst<C extends TC> = InstanceType<C>;
/**
 * A union type representing either a constructor `Complex`, an object, or void.
 * Used to hint that a static method can also be invoked "bare".
 */
export type Cvoid<C extends TC> = Ctor<C> | {} | void;
/**
 * Type of callback Complex.compare().
 */
export type Compare = (a: Complex, b: Cobj) => number;
