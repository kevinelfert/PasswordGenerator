const { customAlphabet, nanoid } = require('nanoid')
const prompt = require('prompt-sync')()

const nanoid_nonSpecial = customAlphabet('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789')
const nanoid_special = customAlphabet('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+={}[]<>?')

const length = Number(prompt("How many characters? "))
const special = prompt("Special characters? (y/n) ")

if(typeof(length) === 'number'){
  if(special === 'y'){
    console.log(nanoid_special(length))
  }
  else if (special === 'n') {
    console.log(nanoid_nonSpecial(length))
  } 
  else {
    console.log('Not an option')
  }
}
else{
  console.log('Length must be a number')
}
