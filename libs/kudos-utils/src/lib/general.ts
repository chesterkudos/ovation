/**
 * @method isBrowser
 * @description whether client side javascript rather than server side javascript
 * @returns {boolean}
 */
export const isBrowser = typeof window !== "undefined";

/**
 * @method isDefined
 * @description whether variable is not undefined or null and not an empty string
 * @param val {*}
 * @returns {boolean}
 */
export const isDefined = (val: unknown) =>
  typeof val !== "undefined" && val !== null && !isEmpty(val);

/**
 * @method isEmpty
 * @description whether string is empty or has no visible characters or array has a length of 0
 * @param val {*}
 * @returns {boolean}
 */
export const isEmpty = (val: unknown) =>
  (Array.isArray(val) && val.length === 0) ||
  typeof val === "undefined" ||
  val === null ||
  val === false ||
  val === "" ||
  (typeof val === "string" && val.trim() === "");

/**
 * @method isObject
 * @description  Returns `true` if `value` is a object, else `false`
 * @param {*} value The value to check
 * @returns {boolean}
 */
export const isObject = (value: unknown) => {
  return typeof value === "object" && value !== null;
};

/**
 * @method isBoolean
 * @description Returns `true` if `value` is a boolean, else `false`
 * @param {*} value The value to check
 * @returns {boolean}
 */
export const isBoolean = (value: unknown) => {
  return (
    value === true ||
    value === false ||
    (isObject(value) && toString.call(value) === "[object Boolean]")
  );
};

/**
 * @method isObjectEmpty
 * @description whether object is empty
 * @param {string} val
 * @returns {boolean}
 */
export const isObjectEmpty = (val: string | number | object | boolean) =>
  !Object.keys(val).length || Object.keys(val).length === 0;

/**
 * @method isObjectKeyDefined
 * @description whether a key exists in an object
 * @param val {*}
 * @returns {boolean}
 */
export const isObjectKeyDefined = (val: unknown) =>
  typeof val !== "undefined" && val !== null;

/**
 * @method uniqueArray
 * @description returns a unique single-dimensional of numbers and/or strings
 * @param {array} arr
 * @returns {array}
 */
export const uniqueArray = (arr: unknown[]) => [...new Set(arr)];

/**
 * @method localStorageIsSupported
 * @description whether the current browser supports local storage
 * @returns {boolean}
 */
export const localStorageIsSupported = () => {
  const propStub = "ping";
  try {
    localStorage.setItem(propStub, propStub);
    localStorage.removeItem(propStub);

    return true;
  } catch (e) {
    return false;
  }
};

/**
 * @method throttle
 * @description throttling function
 * @param {function} fn
 * @param {number} delay
 * @returns {function}
 */
export const throttle = (fn: (...any: unknown[]) => unknown, delay: number) => {
  let lastCall = 0;

  return (...args: unknown[]) => {
    const now = new Date().getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;

    return fn(...args);
  };
};

/**
 * @method isNumber
 * @description Returns `true` if `value` is a number, else `false`
 * @param {*} value The value to check
 * @returns {boolean}
 */
export const isNumber = (value: unknown) => {
  return (
    typeof value === "number" ||
    (isObject(value) && toString.call(value) === "[object Number]")
  );
};
