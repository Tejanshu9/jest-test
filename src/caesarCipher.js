function caesarCipher(str, shift) {
  // normalize shift (handles >26 and negative shifts)
  shift = shift % 26;

  let result = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    // check if uppercase letter
    if (char >= "A" && char <= "Z") {
      let code = char.charCodeAt(0) - 65; // A = 0
      let shifted = (code + shift + 26) % 26; // wrap + handle negative
      result += String.fromCharCode(shifted + 65);
    }

    // check if lowercase letter
    else if (char >= "a" && char <= "z") {
      let code = char.charCodeAt(0) - 97; // a = 0
      let shifted = (code + shift + 26) % 26;
      result += String.fromCharCode(shifted + 97);
    }

    // non-alphabet characters
    else {
      result += char;
    }
  }

  return result;
}

module.exports = caesarCipher;
