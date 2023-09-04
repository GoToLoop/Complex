/**
 * @fileoverview This file imports Complex class & makes it globally available.
 */

import('./complex.mjs').then(({ default: c }) => {
    /**
     * An immutable complex number with real and imaginary parts.
     * @global
     * @var {typeof import('./complex.mjs').default} Complex
     */
    var Complex = c;
    globalThis.Complex = Complex;
});

/*
    void function checkComplex(fun) {
    'Complex' in globalThis ? fun() : setTimeout(checkComplex, 1000, fun);
    }(startCallback);
 */
