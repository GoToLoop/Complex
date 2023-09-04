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

expectType<Readonly<{ writable: false }>>(Complexed._READONLY);
expectAssignable<PropertyDescriptor>(Complexed._READONLY);
expectType<Readonly<{
    real: Readonly<{ writable: false }>;
    imag: Readonly<{ writable: false }>;
}>>(Complexed._IMMUTABLE);
expectAssignable<PropertyDescriptorMap>(Complexed._IMMUTABLE);
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

printType(Complexed);
