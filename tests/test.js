// @ts-check
/// <reference path="../typings/complex.d.ts" />

"use strict";

callWhenComplexReady(start);

function start() {
  class C extends Complex {uyt = 10; static C() {return this._new()}}
  console.log(C.C());

  const c = C.fromRandom(6);
  const d = Complex.fromRandom(6);

  const ctor = c.constructor;

  const e = ctor.prototype.half();
  const f = ctor.fromRandom(10);

  console.log(c, c.__proto__, c.uyt, 'uyt' in d, e.uyt, f.uyt);

  const arr = Object.freeze([c, c]);
  const g = Complex.sort(new Set(arr));
  const gg = Complex.removeDuplicates(arr);

  g[0].uyt;
  console.log(arr, g, gg);

  const obj = { fromRandom: C.fromRandom, abc: 'def' };

  const m = obj.fromRandom;
  console.log(obj.fromRandom(3));
  console.log(m(2));

  const
    t0 = C.arrClone([4]),
    t1 = C.arrClone(new Set([4])),
    t2 = C.arrClone(new Uint8ClampedArray([4])),
    t3 = C.arrClone(new Set(new Uint8ClampedArray([4])));

  console.log(t0, t1, t2, t3);

  const instC = (new c.__proto__.constructor);
  console.log(instC, instC.uyt);

  const
    objC = C.fromZ({ imag: 10, real: 5 }),
    objComplex = Complex.fromZ(c);

  console.log(objC, objComplex);

  console.log(+c, '' + c, ...c);
  console.log(Object.prototype.toString.call(new C), c.toString());

  const destructArr = [...c], destructObj = {...c};
  console.log(destructArr, destructObj);

  for (const n of c) console.log(n);

  console.log(c.hashCode());

  const
    epsilonDesc = Object.getOwnPropertyDescriptor(Complex, 'epsilon'),
    epsilonSetter = epsilonDesc?.set;

  epsilonSetter?.call(Complex, .3);
}
