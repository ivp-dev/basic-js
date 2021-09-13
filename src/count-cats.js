import { NotImplementedError } from '../extensions/index.js';

const CAT = '^^';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats(matrix) {
  return matrix.reduce((acc, r) => r.reduce((acc, c) => acc+=~~(c===CAT), acc), 0);
}