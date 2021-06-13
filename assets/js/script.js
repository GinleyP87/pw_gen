// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// ARRAYS
var num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var locase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upcase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '|', ';', ':', '<', '>', ',', '.', '?', '/', '~', '~'
];


function questions() {
  var process = false;
    do {
      var charL = prompt("Choose a password length between 8 and 128 characters.");
      var askNum = confirm("Do you want your password to include numbers?");
      var askLo = confirm("Do you want your password to include lower case letters?");
      var askUp = confirm("Do you want your password to include upper case letters?");
      var askSpec = confirm("Do you want your password to include special characters?");

      var answers = {
          charL: charL,
          askNum: askNum,
          askLo: askLo,
          askUp: askUp,
          askSpec: askSpec
      }
      if((length < 8)||(length >128))
      alert("Choose number between 8 and 128.")
      else if ((!askNum)&(askLo)&&(askUp)&&(askSpec))
      alert("Must choose at least one parameter.");
      else 
      process = true;
  
} while(!process);
return answers;
}





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
