// Assignment code here

function generatePassword(){
  var charLength = window.prompt("Please enter a desired character length between 8 and 128 characters")
  var charLengthValidated;

  // validate charLength -- how do I do TypeOf to validate numeric?
  if (charLength <= 8 || charLength >= 128){
    window.alert("Invalid length input.  Please try again")  
  } else {
    charLengthValidated = true;
  }

  // validate charSet

  if (charLengthValidated){
    var charSet = window.prompt("Please enter desired character sets, including lowercase(L), uppercase(U), numeric(N), and special(S)")
  }
  var charSetValidated = true;
  var typeLower = false;
  var typeUpper = false;
  var typeNumeric = false;
  var typeSpecial = false;


  for (var i = 0; i < charSet.length; i++) { 
    if (charSet[i] != "L" && charSet[i] != "U" && charSet[i] != "N" && charSet[i] != "S"){ // add commas, and spaces?  ALSO TO LOWER
      charSetValidated = false;
    } else if (charSet[i] == "L"){
      var typeLower = true;
    } else if (charSet[i] == "U"){
      var typeUpper = true;
    } else if (charSet[i] == "N"){
      var typeNumeric = true;
    } else if (charSet[i] == "S"){
      var typeSpecial = true;
    }
  }
  if(charSetValidated == false){
    window.alert("Invalid type input. Please try again")  
  } else{
      window.alert("Thanks for your input. See password below.")  
    // create password

    // Special… 33-47 (+58-64)
    // Numeric… 48-57
    // Upper… 65-90
    // Lower… 97-122
  }
    return "wahoo"
}

  // console.log(String.fromCharCode(189, 43, 190, 61));
  // https://www.ascii-code.com/


  
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
