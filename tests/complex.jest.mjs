// @ts-check

/// <reference types="@jest/globals" />

import Complex from '../complex.mjs';

class Complexed extends Complex {
  static READONLY = super._READONLY;
  static IMMUTABLE = super._IMMUTABLE;

  static TYPED = super._TYPED;
  static METHOD = super._METHOD;

  static hashFBuf = super._hashFBuf;
  static hashIBuf = super._hashIBuf;

  static isComplex = this._isComplex;
}

describe('Complex', () => {
  describe('constructor', () => {
    it('should create a new instance of Complex with default values', () => {
      const complex = new Complex;
      expect(complex.real).toBe(0);
      expect(complex.imag).toBe(0);
    });

    it('should create a new instance of Complex with given values', () => {
      const complex = new Complex(Math.SQRT1_2, Math.LOG10E);
      expect(complex.real).toBe(Math.SQRT1_2);
      expect(complex.imag).toBe(Math.LOG10E);
    });
  });

  describe('add', () => {
    it('should add two complex numbers', () => {
      const complex1 = new Complex(1, 2);
      const complex2 = { real: 3, imag: 4 };
      const result = complex1.add(complex2);
      expect(result.real).toBe(4);
      expect(result.imag).toBe(6);
    });

    it('should add a complex number and a real number', () => {
      const complex = new Complex(1, 2);
      const result = complex.add(3);
      expect(result.real).toBe(4);
      expect(result.imag).toBe(2);
    });
  });

  describe('sub', () => {
    it('should subtract two complex numbers', () => {
      const complex1 = new Complex(1, 2);
      const complex2 = { real: 3, imag: 4 };
      const result = complex1.sub(complex2);
      expect(result.real).toBe(-2);
      expect(result.imag).toBe(-2);
    });

    it('should subtract a complex number and a real number', () => {
      const complex = new Complex(1, 2);
      const result = complex.sub(3);
      expect(result.real).toBe(-2);
      expect(result.imag).toBe(2);
    });
  });

  describe('mul', () => {
    it('should multiply two complex numbers', () => {
      const complex1 = new Complex(1, 2);
      const complex2 = { real: 3, imag: 4 };
      const result = complex1.mul(complex2);
      expect(result.real).toBe(-5);
      expect(result.imag).toBe(10);
    });

    it('should multiply a complex number and a real number', () => {
      const complex = new Complex(1, 2);
      const result = complex.mul(3);
      expect(result.real).toBe(3);
      expect(result.imag).toBe(6);
    });
  });

  describe('div', () => {
    it('should divide two complex numbers', () => {
      const complex1 = new Complex(1, 2);
      const complex2 = { real: 3, imag: 4 };
      const result = complex1.div(complex2);
      expect(result.real).toBeCloseTo(.44, 2);
      expect(result.imag).toBeCloseTo(.08, 2);
    });

    it('should divide a complex number and a real number', () => {
      const complex = new Complex(1, 2);
      const result = complex.div(3);
      expect(result.real).toBeCloseTo(.33, 2);
      expect(result.imag).toBeCloseTo(.67, 2);
    });
  });

  describe('abs', () => {
    it('should return the absolute value of a complex number', () => {
      const complex = new Complex(3, 4);
      const result = complex.abs();
      expect(result).toBeCloseTo(5);
    });
  });

  describe('sin', () => {
    it('should return the sine of a complex number', () => {
      const complex = new Complex(1, 2);
      const result = complex.sin();
      expect(result.real).toBeCloseTo(3.17);
      expect(result.imag).toBeCloseTo(1.96);
    });
  });

  describe('cos', () => {
    it('should return the cosine of a complex number', () => {
      const complex = new Complex(1, 2);
      const result = complex.cos();
      expect(result.real).toBeCloseTo(2.03);
      expect(result.imag).toBeCloseTo(-3.05);
    });
  });

  describe('tan', () => {
    it('should return the tangent of a complex number', () => {
      const complex = new Complex(1, 2);
      const result = complex.tan();
      expect(result.real).toBeCloseTo(.03);
      expect(result.imag).toBeCloseTo(1.01);
    });
  });

  describe('sinh', () => {
    it('should return the hyperbolic sine of a complex number', () => {
      const complex = new Complex(1, 2);
      const result = complex.sinh();
      expect(result.real).toBeCloseTo(-.49);
      expect(result.imag).toBeCloseTo(1.4);
    });
  });

  describe('cosh', () => {
    it('should return the hyperbolic cosine of a complex number', () => {
      const complex = new Complex(1, 2);
      const result = complex.cosh();
      expect(result.real).toBeCloseTo(-.64);
      expect(result.imag).toBeCloseTo(1.07);
    });
  });

  describe('tanh', () => {
    it('should return the hyperbolic tangent of a complex number', () => {
      const complex = new Complex(1, 2);
      const result = complex.tanh();
      expect(result.real).toBeCloseTo(1.17);
      expect(result.imag).toBeCloseTo(-.24);
    });
  });

  describe('compareTo', () => {
    it('should compare two complex numbers', () => {
      const complex1 = new Complex(-1.13, .27);
      const complex2 = new Complex(-1.13, 4.6);

      const result1 = complex1.compareTo(complex2);
      const result2 = complex2.compareTo(complex1);
      const result3 = complex2.compareTo(complex2);

      expect(result1).toBeLessThan(0);
      expect(result2).toBeGreaterThan(0);
      expect(result3).toBe(0);
    });
  });

  describe('equals', () => {
    it('should check if two complex numbers are equal', () => {
      const complex1 = new Complex(Math.SQRT1_2, Math.LN2);
      const complex2 = { real: Math.SQRT1_2, imag: Math.LN2 };

      const result = complex1.equals(complex2);
      expect(result).toBe(true);
    });
  });

  describe('clone', () => {
    it('should clone a complex number, keeping same hashcode & string', () => {
      const complex = new Complex(Math.SQRT1_2, Math.LN2);
      const result = complex.clone();

      expect(result).not.toBe(complex);
      expect(result).toEqual(complex);

      expect(result.real).toBe(Math.SQRT1_2);
      expect(result.imag).toBe(Math.LN2);

      expect(result.hashCode()).toBe(complex.hashCode());
      expect(result.$()).toBe(complex.toString());
    });
  });

describe('resetCaches', () => {
    it('should reset the cached hashcode and string representation', () => {
      const complex = new Complex(Math.E, Math.PI);
      const hash = complex.hashCode();
      const info = complex.toString();

      complex.hashCode(-153.7);
      complex.$(2, 'appended string');
      expect(complex.hashCode()).not.toBe(hash);
      expect(complex.toString()).not.toBe(info);

      complex.resetCaches();
      expect(complex.hashCode()).toBe(hash);
      expect(complex.toString()).toBe(info);
    });
  });
});

describe('Static properties', () => {
  describe('ZERO', () => {
    it('should be a complex number representing zero', () => {
      expect(Complex.ZERO.real).toBe(0);
      expect(Complex.ZERO.imag).toBe(0);
    });
  });

  describe('_1_0i', () => {
    it('should be a complex number representing 1 + 0i', () => {
      expect(Complex._1_0i.real).toBe(1);
      expect(Complex._1_0i.imag).toBe(0);
    });
  });

  describe('_1_0i_neg', () => {
    it('should be a complex number representing -1 + 0i', () => {
      expect(Complex._1_0i_neg.real).toBe(-1);
      expect(Complex._1_0i_neg.imag).toBe(0);
    });
  });

  describe('_0_1i', () => {
    it('should be a complex number representing 0 + 1i', () => {
      expect(Complex._0_1i.real).toBe(0);
      expect(Complex._0_1i.imag).toBe(1);
    });
  });

  describe('_0_1i_neg', () => {
    it('should be a complex number representing 0 - 1i', () => {
      expect(Complex._0_1i_neg.real).toBe(0);
      expect(Complex._0_1i_neg.imag).toBe(-1);
    });
  });

  describe('PI', () => {
    it('should be the value of pi', () => {
      expect(Complex.PI).toBe(3.141592653589793);
    });
  });

  describe('TAU', () => {
    it('should be the value of tau', () => {
      expect(Complex.TAU).toBe(6.283185307179586);
    });
  });

  describe('RAD_TO_DEG', () => {
    it('should be the conversion factor from radians to degrees', () => {
      expect(Complex.RAD_TO_DEG).toBe(57.29577951308232);
    });
  });

  describe('DEG_TO_RAD', () => {
    it('should be the conversion factor from degrees to radians', () => {
      expect(Complex.DEG_TO_RAD).toBe(.017453292519943295);
    });
  });

  describe('epsilon accessors', () => {
    describe('set epsilon', () => {
      it('should change default max diff to 1E-10 and back to 1E-8', () => {
        const { epsilon } = Complex;
        Complex.epsilon = 1E-10;
        expect(Complex.epsilon).toBe(1E-10);
        Complex.epsilon = epsilon;
      });

      it('should throw a RangeError if the value <= 0', () => {
        expect(() => {
          Complex.epsilon = 0;
        }).toThrow(RangeError);
      });

      it('should throw a RangeError if the value is >= 1', () => {
        expect(() => {
          Complex.epsilon = 1;
        }).toThrow(RangeError);
      });
    });

    describe('get epsilon', () => {
      it('should get the default max diff allowed of 1E-8', () => {
        expect(Complex.epsilon).toBe(1E-8);
      });
    });
  });

  describe('toDeg', () => {
    it('should convert an angle in radians to degrees', () => {
      expect(Complex.toDeg(Math.PI)).toBeCloseTo(180);
    });
  });

  describe('toRad', () => {
    it('should convert an angle in degrees to radians', () => {
      expect(Complex.toRad(180)).toBeCloseTo(Math.PI);
    });
  });

  describe('compare', () => {
    it('should compare 2 complex numbers by their real and imag parts', () => {
      const complex1 = new Complex(-1.13, .27);
      const complex2 = new Complex(-1.13, 4.6);

      const result1 = Complex.compare(complex1, complex2);
      const result2 = Complex.compare(complex2, complex1);
      const result3 = Complex.compare(complex1, complex1);

      expect(result1).toBeLessThan(0);
      expect(result2).toBeGreaterThan(0);
      expect(result3).toBe(0);
    });
  });

  describe('sort', () => {
    it('should sort an array of Complex by their real and imag parts', () => {
      const c1 = new Complex(1, 2);
      const c2 = new Complex(3, 4);
      const c3 = new Complex(2, 1);
      const c4 = new Complex(3, 3);
      const c5 = new Complex(2, 1); // c5 has same content as c3

      const sorted = Complex.sort([ c1, c2, c3, c4, c5 ]);

      expect(sorted[0]).toBe(c1);
      expect(sorted[1]).toBe(c3); // still c3 comes before c5
      expect(sorted[2]).toBe(c5);
      expect(sorted[3]).toBe(c4);
      expect(sorted[4]).toBe(c2);
    });
  });

  describe('arrClone', () => {
    it('should clone an array of complex objects', () => {
      const c1 = new Complex(1, 2);
      const c2 = new Complex(3, 4);
      const arr = [ c1, c2 ];
      const cloned = Complex.arrClone(arr);
      expect(cloned).not.toBe(arr);
      expect(cloned).toEqual(arr);
    });

    it('should clone a TypedArray of complex numbers', () => {
      const c1 = new Complex(1, 2);
      const c2 = new Complex(3, 4);
      const typed = Float64Array.of(...c1, ...c2);
      const cloned = Complex.arrClone(typed);
      expect(cloned).not.toBe(typed);
      expect(cloned).toEqual(typed);
    });
  });

  describe('_isComplex', () => {
    it('should return true if constructor is a Complex constructor', () => {
      expect(Complexed.isComplex(Complex)).toBe(true);
      expect(Complexed.isComplex(Complexed)).toBe(true);
    });

    it("should return false if constructor isn't a Complex constructor", () => {
      expect(Complexed.isComplex(Array)).toBe(false);
    });
  });
});
