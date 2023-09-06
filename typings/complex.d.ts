import Complex from "../complex.mjs";

type ComplexType = typeof Complex;

declare global {
  var Complex: ComplexType;

  function callWhenComplexReady(
    callback: (c: ComplexType) => void
  ): { Complex: ComplexType | null };
}
