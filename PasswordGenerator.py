#Author: Kevin Elfert
#Date: 10 June 2020

import random
passwordArr = ['1','2','3','4','5','6','7','8','9','0','~','!','@','#','$','%','^','&','*','(',')','-','_','=','+',
				'q','w','e','r','t','y','u','i','o','p','[','{',']','}','|','a','s','d','f','g','h','j','k','l',';',':',
				'z','x','v','b','n','c','m','<','>','?','Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H',
				'J','K','L','Z','X','C','V','B','N','M']
password = ""

length = int(input("Please input the desired length for the password: "))

for i in range(length): 
	x = random.randint(0,86)
	password += passwordArr[x]
print(password)
