//Password Element

const passwordEl = document.getElementById("password");

//randomFunc Object

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  character: getRandomCharacter,
};

// Generator functions

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomCharacter() {
  const symbols = "!@#$%^&*(){}[]=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

//Series of prompts

function promptMe() {
  let stringLengthAnswer = prompt(
    "Please provide the desired password length (between 8 and 128 characters)"
  );
  let numericLengthAnswer = Number(stringLengthAnswer);

  let stringLowerAnswer = confirm(
    "Should the password contain lowercase letters?"
  );

  let stringUpperAnswer = confirm(
    "Should the password contain uppercase letters?"
  );

  let stringNumberAnswer = confirm(
    "Should the password contain numerical values?"
  );

  let stringCharacterAnswer = confirm(
    "Should the password contain special characters?"
  );

//Password Element Inner Text

  passwordEl.innerText = generatePassword(
    stringLowerAnswer,
    stringUpperAnswer,
    stringNumberAnswer,
    stringCharacterAnswer,
    numericLengthAnswer
  );
}

//generatePassword Function

function generatePassword(
  lower,
  upper,
  number,
  character,
  numericLengthAnswer
) {
  let generatedPassword = "";

  if (numericLengthAnswer <= 7) {
    return "Password must be at least 8 characters in length";
  }

  if (numericLengthAnswer >= 129) {
    return "Password cannot be more than 128 characters in length";
  }

  const typesCount = lower + upper + number + character;

  const typesArr = [{ lower }, { upper }, { number }, { character }].filter(
    (item) => Object.values(item)[0]
  );

  if (typesCount === 0) {
    return "At least one character type must be selected to generate password";
  }

  for (let i = 0; i < numericLengthAnswer; i += typesCount) {
    typesArr.forEach((type) => {
      const funcName = Object.keys(type)[0];
      generatedPassword += randomFunc[funcName]();
    });
  }

  const finalPassword = generatedPassword.slice(0, numericLengthAnswer);

  return finalPassword;
}
