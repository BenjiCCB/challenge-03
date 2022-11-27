// Password Generator

function generatePassword(){
  var charLength = window.prompt("Please enter a desired character length between 8 and 128 characters")
  var charLengthValidated;

  // validate charLength -- need to add TypeOf to validate numeric...
  if (charLength <= 8 || charLength >= 128){
    window.alert("Invalid length input.  Please try again")  
  } else {
    charLengthValidated = true;
  }

  // validate charSet
  if (charLengthValidated){
    var charSet = window.prompt("Please enter desired character sets, including lowercase(L), uppercase(U), numeric(N), and special(S)")
  }
  var charSetValidated;
  var charSetArray = [];
  var typeLower = false;
  var typeUpper = false;
  var typeNumeric = false;
  var typeSpecial = false;


  for (var i = 0; i < charSet.length; i++) { 
    if (charSet[i] != "L" && charSet[i] != "U" && charSet[i] != "N" && charSet[i] != "S"){ // add commas, and spaces?  ALSO TO LOWER prob
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
    window.alert("Invalid type input. Please try again, using only 'L', 'U', 'N', and/or 'S'")  
  } else{
      window.alert("Thanks for your input. See password below.")  
    // create password

    // // create available charcter array using ASCII codes... https://www.ascii-code.com
    if (typeLower){
      for (var i = 97; i <= 122; i++) { 
        charSetArray.push(String.fromCharCode(i));
      }
    }
    if (typeUpper){
      for (var i = 65; i <= 90; i++) { 
        charSetArray.push(String.fromCharCode(i));
      }
    }
    if (typeNumeric){
      for (var i = 48; i <= 57; i++) { 
        charSetArray.push(String.fromCharCode(i));
      }
    }
    if (typeSpecial){ // add second set
      for (var i = 33; i <= 47; i++) { 
        charSetArray.push(String.fromCharCode(i));
      }
    }
    
    console.log(charSetArray);


    // // create password from array
    var finalPW = [];
    for (var i = 0; i < charLength; i++) { 
      var arrayIndex = Math.floor(Math.random() * charSetArray.length)
      finalPW.push(charSetArray[arrayIndex]);
    }
    finalPW = finalPW.join('')
  }
    return finalPW;
}

  
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
