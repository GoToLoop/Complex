import Complex from "../complex.mjs";

type ComplexType = typeof Complex;

declare global {
  var Complex: ComplexType;
}
