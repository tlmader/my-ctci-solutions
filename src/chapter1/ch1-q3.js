/**
 * Uses reduce to create a URL with spaces encoded as '%20'.
 *
 * N = |url|
 * Time: O(N)
 * Additional space: O(N) ?
 *
 * @param  {string[]} url URL string as a character array which will be updated in place
 * @return {string[]}     Updated URL character array
 */
export const encodeSpacesReduce = (url) => (
  url
    ? url.reduce((result, char) => (
      result.concat(char === ' ' ? ['%', '2', '0'] : char)
    ), [])
    : url
);

/**
 * Counts the spaces in a URL string, calculates the new length,
 * and sets the new characters to create a URL with spaces encoded as '%20'.
 *
 * N = |url|
 * Time: O(N)
 * Additional space: O(1)
 *
 * @param  {string[]} url URL string as a character array which will be updated in place
 * @return {string[]}     Updated URL character array
 */
export const encodeSpacesInPlace = (url) => {
  if (!url || !url.length) {
    return url;
  }
  let spaceCount = 0;
  for (let char of url) {
    if (char === ' ') {
      spaceCount++;
    }
  }
  const newLength = url.length + (spaceCount * 2);
  for (let i = url.length - 1, j = newLength - 1; i >= 0; i--, j--) {
    if (url[i] === ' ') {
      url[j] = '0';
      url[--j] = '2';
      url[--j] = '%';
    } else {
      url[j] = url[i];
    }
  }
  return url;
};
