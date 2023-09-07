import { expectType, expectAssignable, printType } from 'tsd';
import Complex from '..';

class Complexed extends Complex {
    static override _READONLY = super._READONLY;
    static override _IMMUTABLE = super._IMMUTABLE;
    static override _hashFBuf = super._hashFBuf;
    static override _hashIBuf = super._hashIBuf;
    static override _TYPED = super._TYPED;
    static override _METHOD = super._METHOD;
}

printType(Complexed);

// Test datatype assignability
expectAssignable<PropertyDescriptor>(Complexed._READONLY);
expectAssignable<PropertyDescriptorMap>(Complexed._IMMUTABLE);

// Test protected members using Complexed subclass
expectType<Readonly<{ writable: false }>>(Complexed._READONLY);
expectType<Readonly<{
    real: Readonly<{ writable: false }>;
    imag: Readonly<{ writable: false }>;
}>>(Complexed._IMMUTABLE);

expectType<Complex>(Complex.ZERO);
expectType<Complex>(Complex._1_0i);
expectType<Complex>(Complex._1_0i_neg);
expectType<Complex>(Complex._0_1i);
expectType<Complex>(Complex._0_1i_neg);

expectType<Float64Array>(Complexed._hashFBuf);
expectType<Uint8Array>(Complexed._hashIBuf);

expectType<"BYTES_PER_ELEMENT">(Complexed._TYPED);
expectType<"fromRI">(Complexed._METHOD);

expectType<3.141592653589793>(Complex.PI);
expectType<6.283185307179586>(Complex.TAU);
expectType<57.29577951308232>(Complex.RAD_TO_DEG);
expectType<.017453292519943295>(Complex.DEG_TO_RAD);

// Test public members using parent class Complex
const c1 = new Complex(1, 2), c2 = new Complex(3, 4);

// Test properties
expectType<number>(c1.real);
expectType<number>(c1.imag);

// Test accessors
expectType<number>(Complex.epsilon);
expectType<string>(c1[Symbol.toStringTag]);

// Test methods
expectType<Complex>(c1.add(c2));
expectType<Complex>(c1.sub(c2));
expectType<Complex>(c1.mult(c2));
expectType<Complex>(c1.div(c2));
expectType<Complex>(c1.conj());
expectType<number>(c1.abs());
expectType<number>(c1.arg());
expectType<Complex[]>(c1.roots(3));
expectType<number>(c1.hashCode());
expectType<string>(c1.toString());

// Test static methods
const arr = [new Complex(5, 6), new Complex(7, 8)];
expectType<Complex[]>(Complex.arrClone(arr));
