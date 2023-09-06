// @ts-check

/**
 * @fileoverview This file imports Complex class & makes it globally available.
 */

/**
 * Represents the default export of the './complex.mjs' module, which is the
 * 'Complex' class.
 * @typedef {typeof import('./complex.mjs').default} Ctor
 */

import('./complex.mjs').then(({ default: c }) => {
    /**
     * An immutable complex number with real and imaginary parts.
     * @global
     * @var {Ctor} Complex
     */
    var Complex = c;
    globalThis.Complex = Complex;
});

/**
 * This callback is called when the 'Complex' class is ready and available in
 * the global scope.
 *
 * @callback callWhenComplexReadyCallback
 * @param {Ctor} Complex The 'Complex' class.
 * @return {void}
 */

/**
 * This function checks if the 'Complex' class is available in the global
 * scope. If it is, it calls the provided callback function with the 'Complex'
 * class as an argument. If it's not available, it sets a timeout to check
 * again after 1 second.
 *
 * @param {callWhenComplexReadyCallback} callback The callback function to be
 * called when 'Complex' is ready.
 * @return {{ Complex: Ctor | null }} An object containing the 'Complex' class,
 * or null if it's not available yet.
 */
function callWhenComplexReady(callback) {
    /**
     * An object w/ the 'Complex' class, or null if it's not available yet.
     * @type {{ Complex: Ctor | null }} objC
     */
    const objC = { Complex: null };

    'Complex' in globalThis ? callback(objC.Complex = globalThis.Complex)
                            : setTimeout(callWhenComplexReady, 1000, callback);

    return objC;
}

/*
    void function checkComplex(fun) {
    'Complex' in globalThis ? fun() : setTimeout(checkComplex, 1000, fun);
    }(startCallback);
 */
