/**
 * Performs basic string compression using the counts of repeated characters.
 *
 * Uses a map to count occurrences of each character then builds the result
 * array.
 *
 * N = |str|
 * Time - O(N)
 * Additional space - O(N)
 *\
 * @param  {string} str The string to be compressed
 * @return {string}      The compressed string or the original if shorter
 */
export const compressString = (str) => {
  if (!str || !str.length) {
    return str;
  }
  let result = '';
  for (let i = 0; i < str.length; i++) {
    let previous = str[i];
    let count = 1;
    while (str[i + 1] === previous) {
      i++;
      count++;
    }
    result += count + previous;
    if (result.length >= str.length) {
      return str;
    }
  }
  return result;
};
