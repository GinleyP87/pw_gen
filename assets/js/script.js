// get reference to the #generate element

var generateBtn = document.querySelector("#generate");

// ARRAYS 

var num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var loCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', ';', ':', '<', '>', ',', '.', '?', '/', '~',
];

// QUESTIONS

function questions() {
  var isValid = false;
  do {
    var charLength = prompt("Choose password length between 8 and 128 characters");
    var askNum = confirm("Do you want your password to include numbers?");
    var askLoCase = confirm("Do you want your password to include lower case letters?");
    var askUpCase = confirm("Do you want your password to include upper case letters?");
    var askSpecChar = confirm("Do you want your password to include special characters?");
    
    var responses = {
      length: charLength,
      askNum: askNum,
      askLoCase: askLoCase,
      askUpCase: askUpCase,
      askSpecChar: askSpecChar
    } 
    
    if((charLength < 8)||(charLength > 128))
    alert("Choose number between 8 and 128");
    else if((!askNum)&&(!askLoCase)&&(!askUpCase)&&(!askSpecChar))
    alert("Must choose at least one type.");
    else
    isValid = true;

  } while(!isValid);
  
  return responses;

}

//CREATE RESULT

function generatePassword() {
  var possChar = questions();
  var randoNum = [];
  var pwFinal = "";

  if (possChar.askNum) {
    for (var i of num)
      randoNum.push(i);
  }

  if (possChar.askLoCase) {
    for (var i of loCase)
      randoNum.push(i);
  }

  if (possChar.askUpCase) {
    for (var i of upCase)
      randoNum.push(i);
  }

  if (possChar.askSpecChar) {
    for (var i of specChar)
      randoNum.push(i);
  }


  console.log(randoNum);


  for (var i = 0; i < possChar.length; i++) {
    pwFinal += randoNum[Math.floor(Math.random() * randoNum.length)];
    
  }

  console.log(pwFinal);

  return pwFinal;

}

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);
