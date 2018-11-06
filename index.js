window.addEventListener("load", () => {
  //start your code here
  const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz"
  const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const numbers = "0123456789"
  const specialCharacters = "!#$%&()*+,-./:;<=>?@[\]^_{|}~"
  
  //1. figure out how long our password should be
  document.addEventListener('submit', (event) => {
   //dont go to a new page or dont refresh
   event.preventDefault()
   const input = document.querySelector('input')
   const passwordLength = parseInt(input.value, 10)
   if(passwordLength < 4) {
     alert('Enter a password length that is 4 or more')
   }
   let password = "" //start with empty pw
   
   //we want to build pw up until it matchs the pw length
 for (let i = 0; i < passwordLength; i++) {
   //lowercase letters
   const randomLowerCaseLetterIndex = Math.round(Math.random() * lowerCaseLetters.length)
   password = password + lowerCaseLetters[randomLowerCaseIndex]
   if (password.length === passwordLength) {
     break
   }
   
   const randomUpperCaseLetterIndex = Math.round(Math.random() * upperCaseLetters.length)
   password = password + upperCaseLetters[randomUpperCaseIndex]  
   if (password.length === passwordLength) {
     break
   } 
 
   const randomNumberIndex = Math.round(Math.random() * numbers.length)
   password = password + numbers[randomNumberIndex]    
   if (password.length === passwordLength) {
     break
   }

   const specialCharactersIndex = Math.round(Math.random() * specialCharacters.length)
   password = password + specialCharacters[randomSpecialCharactersIndex] 
   if (password.length === passwordLength) {
     break
   }
 }
 
 console.log(password)
 const result = document.querySelector('#result')
 result.innerText = password
 
 
  })
  
  //2. we need to make a password from the ground up.

    
  }
  
  
  //3. need to keep track of pw requirements
  
  
});
