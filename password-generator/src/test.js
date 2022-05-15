const { customAlphabet, nanoid } = require('nanoid')

const nanoid_nonSpecial = customAlphabet('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789')
const nanoid_special = customAlphabet('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+={}[]<>?')


console.log(nanoid_nonSpecial(8))
console.log(nanoid_special(8))
