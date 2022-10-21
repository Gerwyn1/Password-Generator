const characters = [...Array(95).keys()]
  .map((i) => String.fromCharCode(i + 32))
  .filter((char) => char !== " ");

export const handleShowIcon = (setShowIcon) => {
  setShowIcon("block");
  setTimeout(() => setShowIcon("none"), 1500);
};

export const barColor = (strength, num) => {
  if (num === 1) {
    return strength === "STRONG"
      ? "neonGreen"
      : strength === "MEDIUM"
      ? "yellow"
      : strength === "WEAK"
      ? "orange"
      : strength === "TOO WEAK"
      ? "red"
      : "transparent";
  }
  if (num === 2) {
    return strength === "STRONG"
      ? "neonGreen"
      : strength === "MEDIUM"
      ? "yellow"
      : strength === "WEAK"
      ? "orange"
      : "transparent";
  }
  if (num === 3) {
    return strength === "STRONG"
      ? "neonGreen"
      : strength === "MEDIUM"
      ? "yellow"
      : "transparent";
  }
  if (num === 4) {
    return strength === "STRONG" ? "neonGreen" : "transparent";
  }
};

export const generatePassword = (charValue, included) => {
  const password = [];
  console.log(characters);
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

export const gaugeStrength = (text, setStrength, charValue, included) => {
  console.log(text);
  if (charValue === 0 || included.length === 0) return setStrength("");
  const length = text.length;
  if (length < 9) {
    setStrength("TOO WEAK");
    return;
  } else {
    if (length === 9) {
      if (
        /[a-z]/.test(text) &&
        /[A-Z]/.test(text) &&
        /[\d]/.test(text) &&
        /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(text) &&
        /[\w`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]{9}/.test(text)
      )
        setStrength("MEDIUM");
      else if (
        (/[A-Z]/.test(text) &&
          /[a-z]/.test(text) &&
          /[\d]/.test(text) &&
          /[\w]{9}/.test(text)) ||
        (/[A-Z]/.test(text) &&
          /[a-z]/.test(text) &&
          /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(text) &&
          /[a-zA-Z`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]{9}/.test(text)) ||
        (/[A-Z]/.test(text) &&
          /[\d]/.test(text) &&
          /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(text) &&
          /[A-Z\d`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]{9}/.test(text)) ||
        (/[a-z]/.test(text) &&
          /[\d]/.test(text) &&
          /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(text) &&
          /[a-z\d`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]{9}/.test(text))
      )
        setStrength("WEAK");
      else if (
        (/[A-Z]/.test(text) &&
          /[a-z]/.test(text) &&
          /[a-zA-Z]{9}/.test(text)) ||
        (/[A-Z]/.test(text) && /[\d]/.test(text) && /[A-Z\d]{9}/.test(text)) ||
        (/[A-Z]/.test(text) &&
          /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(text) &&
          /[A-Z`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]{9}/.test(text)) ||
        (/[a-z]/.test(text) && /[\d]/.test(text) && /[a-z\d]{9}/.test(text)) ||
        (/[a-z]/.test(text) &&
          /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(text) &&
          /[a-z`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]{9}/.test(text)) ||
        (/[\d]/.test(text) &&
          /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(text) &&
          /[\d`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]{9}/.test(text))
      )
        setStrength("WEAK");
      else setStrength("TOO WEAK");
    } else if (length === 10) {
      if (
        /[a-z]/.test(text) &&
        /[A-Z]/.test(text) &&
        /[\d]/.test(text) &&
        /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(text) &&
        /[\w`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]{10}/.test(text)
      )
        setStrength("MEDIUM");
      else if (
        (/[A-Z]/.test(text) &&
          /[a-z]/.test(text) &&
          /[\d]/.test(text) &&
          /[\w]{10}/.test(text)) ||
        (/[A-Z]/.test(text) &&
          /[a-z]/.test(text) &&
          /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(text) &&
          /[a-zA-Z`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]{10}/.test(text)) ||
        (/[A-Z]/.test(text) &&
          /[\d]/.test(text) &&
          /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(text) &&
          /[A-Z\d`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]{10}/.test(text)) ||
        (/[a-z]/.test(text) &&
          /[\d]/.test(text) &&
          /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(text) &&
          /[a-z\d`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]{10}/.test(text))
      )
        setStrength("MEDIUM");
      else if (
        /[A-Z]/.test(text) &&
        /[a-z]/.test(text) &&
        /[a-zA-Z]{10}/.test(text)
      )
        setStrength("MEDIUM");
      else if (
        (/[A-Z]/.test(text) && /[\d]/.test(text) && /[A-Z\d]{10}/.test(text)) ||
        (/[A-Z]/.test(text) &&
          /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(text) &&
          /[A-Z`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]{10}/.test(text)) ||
        (/[a-z]/.test(text) && /[\d]/.test(text) && /[a-z\d]{10}/.test(text)) ||
        (/[a-z]/.test(text) &&
          /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(text) &&
          /[a-z`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]{10}/.test(text))
      )
        setStrength("WEAK");
      else setStrength("TOO WEAK");
    } else if (length === 11) {
      if (
        /[a-z]/.test(text) &&
        /[A-Z]/.test(text) &&
        /[\d]/.test(text) &&
        /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(text) &&
        /[\w`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]{11}/.test(text)
      )
        setStrength("STRONG");
      else if (
        (/[A-Z]/.test(text) &&
          /[a-z]/.test(text) &&
          /[\d]/.test(text) &&
          /[\w]{11}/.test(text)) ||
        (/[A-Z]/.test(text) &&
          /[a-z]/.test(text) &&
          /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(text) &&
          /[a-zA-Z`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]{11}/.test(text)) ||
        (/[A-Z]/.test(text) &&
          /[\d]/.test(text) &&
          /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(text) &&
          /[A-Z\d`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]{11}/.test(text)) ||
        (/[a-z]/.test(text) &&
          /[\d]/.test(text) &&
          /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(text) &&
          /[a-z\d`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]{11}/.test(text))
      )
        setStrength("STRONG");
      else if (
        (/[A-Z]/.test(text) &&
          /[a-z]/.test(text) &&
          /[a-zA-Z]{11}/.test(text)) ||
        (/[A-Z]/.test(text) && /[\d]/.test(text) && /[A-Z\d]{11}/.test(text)) ||
        (/[A-Z]/.test(text) &&
          /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(text) &&
          /[A-Z`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]{11}/.test(text)) ||
        (/[a-z]/.test(text) && /[\d]/.test(text) && /[a-z\d]{11}/.test(text)) ||
        (/[a-z]/.test(text) &&
          /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(text) &&
          /[a-z`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]{11}/.test(text)) ||
        (/[\d]/.test(text) &&
          /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(text) &&
          /[\d`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]{11}/.test(text))
      )
        setStrength("MEDIUM");
      else if (
        /[a-z]{11}/.test(text) ||
        /[A-Z]{11}/.test(text) ||
        /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]{11}/.test(text)
      )
        setStrength("WEAK");
      else setStrength("TOO WEAK");
    } else if (length === 12) {
      if (/\d{12}/.test(text)) setStrength("TOO WEAK");
      else if (/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]{12}/.test(text))
        setStrength("WEAK");
      else if (/[a-z]{12}/.test(text) || /[A-Z]{12}/.test(text))
        setStrength("MEDIUM");
      else if (
        (/[A-Z]/.test(text) && /[\d]/.test(text) && /[A-Z\d]{12}/.test(text)) ||
        (/[A-Z]/.test(text) &&
          /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(text) &&
          /[A-Z`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]{12}/.test(text)) ||
        (/[a-z]/.test(text) && /[\d]/.test(text) && /[a-z\d]{12}/.test(text)) ||
        (/[a-z]/.test(text) &&
          /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(text) &&
          /[a-z`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]{12}/.test(text))
      )
        setStrength("MEDIUM");
      else if (
        /[\d]/.test(text) &&
        /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(text) &&
        /[\d`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]{12}/.test(text)
      )
        setStrength("WEAK");
      else setStrength("STRONG");
    } else if (length === 13) {
      // number only
      if (/\d{13}/.test(text)) setStrength("TOO WEAK");
      // symbol only
      else if (/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]{13}/.test(text))
        setStrength("WEAK");
      // uppercase or lowercase
      else if (/[a-z]{13}/.test(text) || /[A-Z]{13}/.test(text))
        setStrength("MEDIUM");
      // duo
      else if (
        (/[A-Z]/.test(text) && /[\d]/.test(text) && /[A-Z\d]{13}/.test(text)) ||
        (/[A-Z]/.test(text) &&
          /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(text) &&
          /[A-Z`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]{13}/.test(text)) ||
        (/[a-z]/.test(text) && /[\d]/.test(text) && /[a-z\d]{13}/.test(text)) ||
        (/[a-z]/.test(text) &&
          /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(text) &&
          /[a-z`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]{13}/.test(text))
      )
        setStrength("MEDIUM");
      else if (
        /[\d]/.test(text) &&
        /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(text) &&
        /[\d`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]{13}/.test(text)
      )
        setStrength("WEAK");
      else setStrength("STRONG");
    } else if (length === 14) {
      if (/\d{14}/.test(text)) setStrength("TOO WEAK");
      else if (/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]{14}/.test(text))
        setStrength("WEAK");
      else setStrength("STRONG");
    } else if (length == 15) {
      if (/\d{15}/.test(text)) setStrength("TOO WEAK");
      else if (/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]{15}/.test(text))
        setStrength("WEAK");
      else setStrength("STRONG");
    } else if (length === 16) {
      if (/\d{16}/.test(text)) setStrength("WEAK");
      else if (/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]{16}/.test(text))
        setStrength("WEAK");
      else setStrength("STRONG");
    } else if (length === 17) {
      if (/\d{17}/.test(text)) setStrength("MEDIUM");
      else if (/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]{17}/.test(text))
        setStrength("MEDIUM");
      else setStrength("STRONG");
    } else if (length === 18) {
      if (/\d{18}/.test(text)) setStrength("MEDIUM");
      else if (/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]{18}/.test(text))
        setStrength("MEDIUM");
      else setStrength("STRONG");
    }
  }
};
