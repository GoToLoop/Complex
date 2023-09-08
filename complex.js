// @ts-check

/// <reference path="./typings/complex.d.ts" />

/**
 * @fileoverview This file imports Complex class & makes it globally available.
 */

/**
 * Represents the default export of the './complex.mjs' module, which is the
 * 'Complex' class constructor.
 * @typedef {typeof import('./complex.mjs').default} Ctor
 */

import('./complex.mjs').then(({ default: c }) => {
    /**
     * An immutable complex number class with real and imaginary parts.
     * @global
     * @var {Ctor} Complex
     */
    var Complex = c;
    globalThis.Complex = Complex;
});

/**
 * This callback is invoked when the 'Complex' class is ready & available
 * in the global scope.
 *
 * @callback complexReadyCallback
 * @param {Ctor} Complex The 'Complex' class constructor when ready.
 * @return {void}
 */

/**
 * This function checks if the 'Complex' class is available in the global
 * scope. If it is, it calls the provided callback function with the 'Complex'
 * class as the argument. If it's not available, it sets a timeout to check
 * again after 1 second.
 *
 * @param {complexReadyCallback=} callback The callback function to be called
 * when 'Complex' is ready.
 * @return {Promise<Ctor>} A `Promise` which resolves as the 'Complex' class.
 */
function callMeWhenComplexReady(callback) {
    /**
     * This inner function checks if the 'Complex' class is available in the
     * global scope. If it is, it resolves the promise with the 'Complex' class
     * and then calls the provided callback function with the 'Complex' class
     * as the argument. Otherwise, it sets a timeout to check again after 1s.
     * @param {(value: Ctor) => void} res
     * @return {void}
     */
    function executor(res) {
        if ('Complex' in globalThis) return res(Complex), callback?.(Complex);
        setTimeout(executor, 1000, res);
    }

    return new Promise(executor);
}

/*
    void function checkComplex(fun) {
    'Complex' in globalThis ? fun() : setTimeout(checkComplex, 1000, fun);
    }(startCallback);
 */
