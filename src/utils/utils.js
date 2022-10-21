const characters = [...Array(95).keys()]
  .map((i) => String.fromCharCode(i + 32))
  .filter((char) => char !== " ");

export const generatePassword = (charValue, included, setPassword) => {
  const password = [];

  if (included.length === 0 || charValue === 0) {
    return "P4$5W0rD!";
  } else {
    while (password.length < charValue) {
      const pickedChar =
        characters[Math.floor(Math.random() * characters.length)];

      if (included?.includes("Include Uppercase letters")) {
        if (/[A-Z]/.test(pickedChar)) {
          password.push(pickedChar);
          continue;
        }
      }
      if (included?.includes("Include Lowercase letters")) {
        if (/[a-z]/.test(pickedChar)) {
          password.push(pickedChar);
          continue;
        }
      }
      if (included?.includes("Include Numbers")) {
        if (/\d/.test(pickedChar)) {
          password.push(pickedChar);
          continue;
        }
      }
      if (included?.includes("Include Symbols")) {
        if (/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(pickedChar)) {
          password.push(pickedChar);
          continue;
        }
      }
    }
  }

  return password.join("");
};

export const gaugeStrength = (placeholderText, setStrength) => {
  console.log(placeholderText)
  if (placeholderText.length < 9) {
    setStrength("TOO WEAK");
    return;
  } else {
    if (/^\d{9}$/.test(placeholderText)) setStrength("TOO WEAK");
    else if (/^[a-z]{9}$/.test(placeholderText)) setStrength("TOO WEAK");
    else if (/^[A-Z]{9}$/.test(placeholderText)) setStrength("TOO WEAK");
    else if (/^[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]{9}$/.test(placeholderText)) setStrength("TOO WEAK");
    else if (/^[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]{9}$/.test(placeholderText)) setStrength("TOO WEAK");
    



    if (/^[\w]{9}$/.test(placeholderText)) setStrength("TOO WEAK");
    else if (
      /^[\w`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]{6}$/.test(placeholderText)
    ) {
      setStrength("TOO RARE");
    } else setStrength("GG");
  }
};
