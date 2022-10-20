const characters = [...Array(95).keys()]
  .map((i) => String.fromCharCode(i + 32))
  .filter((char) => char !== " ");

export const generatePassword = (charValue, setPassword, included) => {
console.log(characters);

  const password = [];

  if (included.length === 0 || charValue === 0) {
    setPassword("P4$5W0rD!");
    return;
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

  password = password.join("");
  setPassword(password);
};
