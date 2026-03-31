function reverseString(word) {
  if (!word) return "";

  let res = "";
  for (let i = word.length - 1; i > -1; i--) {
    res += word[i];
  }
  return res;
}
module.exports = reverseString;
