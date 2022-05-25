//DOM elements

const passwordEl = document.getElementById("password");
// const lengthEl = document.getElementById('length');
// const uppercaseEl = document.getElementById('uppercase');
// const lowercaseEl = document.getElementById('lowercase');
// const numbersEl = document.getElementById('numbers');
// const characterEl = document.getElementById('character');
// const generateEl = document.getElementById('generate');
// const clipboardEl = document.getElementById('password');

// console.log(lower);

// generateEl.addEventListener('click', () => {

// })

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

// console.log(getRandomLower());
// console.log(getRandomUpper());
// console.log(getRandomNumber());
// console.log(getRandomCharacter());

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

  // console.log(numericLengthAnswer);
  // console.log(stringLowerAnswer);
  // console.log(stringUpperAnswer);
  // console.log(stringNumberAnswer);
  // console.log(stringCharacterAnswer);

  passwordEl.innerText = generatePassword(
    stringLowerAnswer,
    stringUpperAnswer,
    stringNumberAnswer,
    stringCharacterAnswer,
    numericLengthAnswer
  );
}

function generatePassword(
  lower,
  upper,
  number,
  character,
  numericLengthAnswer
) {
  //1. Init pw var
  //2. Filter out unchecked types
  //3. Loop over length, call generator function for each type
  //4. Add final pw to pw var and return it

  let generatedPassword = "";

  if (numericLengthAnswer <= 7) {
    console.log('gotcha');
    return "Password must be at least 8 characters in length"
  }

  if (numericLengthAnswer >= 129) {
    console.log('gotcha');
    return "Password cannot be more than 128 characters in length"
  }

  const typesCount = lower + upper + number + character;

  // console.log('typesCount: ', typesCount);

  const typesArr = [{ lower }, { upper }, { number }, { character }].filter(
    (item) => Object.values(item)[0]
  );

  // console.log('typesArr: ', typesArr);

  if (typesCount === 0) {
    return "At least one character type must be selected to generate password";
  }

  for (let i = 0; i < numericLengthAnswer; i += typesCount) {
    typesArr.forEach((type) => {
      const funcName = Object.keys(type)[0];
      // console.log("funcName: ", funcName);

      generatedPassword += randomFunc[funcName]();
    });
  }

  const finalPassword = generatedPassword.slice(0, numericLengthAnswer);

  return finalPassword;
}

// function generateLength(){
//   const length = numericLengthAnswer;
//   console.log(hasLower);
// }

// function generateLower(){

// if (stringLowerAnswer==true)
//   {}

// }

// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
