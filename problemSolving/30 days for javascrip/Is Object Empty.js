/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
  // typeof obj === 'object' 
  if (obj !== null) {
      return Object.keys(obj).length === 0;
  } else if (Array.isArray(obj)) {
      return obj.length === 0;
  }
  return false;
};