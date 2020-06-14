//  console.log('this is js ')

//Assignment # 1

// Q-1
// alert('Welcome to my Website')

// // Q-2
// alert('Error! please enter a valid password')

// // Q-3

//alert(`welcome to js land...\nhappy coding`)

//Assignment # 2


// var username;

// var myName = "Huzaifa Aslam"

// var message = "hello world"

// alert(message)

// var age = "15 years old"

// var job = "mobile application developer"

// alert(myName)

// alert(age)

// alert(job)

// var pizza = "PIZZA\nPIZZ\nPIZ\nPI\nP"
// alert(pizza);

// var email = "huzaifaslam45@gmail.com"

// alert("my email address is " + email)

// var book = "A smarter way to learn JavaScript"

// alert("im trying to learn from a book " + book)

// document.write("Yah! i can write HTML content through js")

// var str = "--------------*****---------------"

// alert(str)

// document.write(str)




//Assignment # 3

// var age = "im 15 years old"

// alert(age);

// var visitor = 14;

// alert("you have visited the site " + visitor + " times")

// var birthYear = 1997;

// alert("my birth year is " + birthYear + " data type of declared variable is number")

// var visitorName = "huzaifa";

// var productTitle = "T-shirts";

// var quantity = 5;

// document.write(visitorName + " ordered " + quantity + " " + productTitle + " on xyx clothing store")



//Assignment # 4

// 1

// var a, b, x;

// 2

//var _var1, $var2, var3, var4, var5;

// var 1var,-var2,#var,!var,&var

// 3-a

//document.write('A heading stating “Rules for naming JS variables”')

// 3-b

// document.write("Variable names can only contain <u>$my_1stVariable</u> , <u>_Variable</u> , <u>$my_1stVariable</u> and <u>$my_1stVariable</u>.");

// 3-c

// document.write("Variable names must begin with <u>$my_1stVariable</u> , <u>_Variable</u> , and <u>Variable</u>.")

// 3-d

// document.write("variable names are case  <u>sensitive</u>")

// 3-e

// document.write("variable names should not be JS  <u>keywords</u>")

//Assignment # 5

// 1-

// +

// var a = 3
// var b = 5
// var c = a + b;
// document.write(`sum of ${a} and ${b} is ${c}`)

// -

// var a = 3
// var b = 5
// var c = a - b;
// document.write(`answer is ${c}`)

// *

// var a = 3
// var b = 5
// var c = a * b;
// document.write(`answer is ${c}`)

// /

// var a = 3
// var b = 5
// var c = a / b;
// document.write(`answer is ${c}`)

// %

// var a = 3
// var b = 5
// var c = a % b;
// document.write(`answer is ${c}`)

// Q-3

//Assignment # 13-15

//  Q# 1-7

// var arr1 = [];
// var arr2 = [{}];
// var arr3 = ['a', 'b', 'c'];
// var arr4 = [1, 2, 3];
// var arr5 = [true, false]
// var arr5 = [1, 'a', true, false]

// var qualifications = ['SSC', 'BSCS', 'BCOM', 'PHD', 'MSC', 'HSC']
// document.write('Qualifications:<br>')
// document.write(`1) ${qualifications[0]}<br>`);
// document.write(`2) ${qualifications[1]}<br> `);
// document.write(`3) ${qualifications[2]}<br>`);
// document.write(`4) ${qualifications[3]}<br>`);
// document.write(`5) ${qualifications[4]}<br>`);
// document.write(`6) ${qualifications[5]}<br>`);

// OR

// qualifications.forEach((item, index) => {
//     document.write(`${index+1}) ${item} <br>`)
// })

// Q# 8

// var studentsName = ['Ali', 'Hamza', "Osama"]
// var StudentsScore = [320, 400, 300]


// document.write(`Score of ${studentsName[0]} is ${StudentsScore[0]}. Percentage: ${(StudentsScore[0]*100)/500}%<br>`)
// document.write(`Score of ${studentsName[1]} is ${StudentsScore[1]}. Percentage: ${(StudentsScore[1]*100)/500}%<br>`)
// document.write(`Score of ${studentsName[2]} is ${StudentsScore[2]}. Percentage: ${(StudentsScore[2]*100)/500}%<br>`)


// Q# 9

var colors = ['blue', 'oragne', 'green', 'purple']

// Q# 9-a

// var userInput = prompt("enter your fav color")
// colors.unshift(userInput);
// document.write(`${colors}`);

// Q# 9-b

// var userInput = prompt("enter your fav color")
// colors.push(userInput);
// document.write(`${colors}`);

// Q# 9-c

// var userInput1 = prompt("enter your fav color")
// var userInput2 = prompt("enter your fav color")
// colors.push(userInput1, userInput2);
// document.write(`${colors}`);

// Q# 9-d


// colors.shift();
// document.write(`${colors}`);

// Q# 9-e


// colors.pop();
// document.write(`${colors}`);


// Q# 9-f

// var userInput1 = prompt("enter your fav color")
// var userInput2 = prompt("enter index number")
// colors.splice(userInput2, 0, userInput1);
// document.write(`${colors}`);

// Q# 9-g

// var userInput1 = prompt("enter index number")
// var userInput2 = prompt("enter the number that your want to delete")
// colors.splice(userInput1, userInput2);
// document.write(`${colors}`);

// Q# 10

// var stuScores = [230, 650, 340, 120]
// document.write(stuScores.sort())

// Q# 11

// var cities = ['karachi', 'lahore', 'quetta', 'peshawer', 'islamabad']
// var selectedCities = cities.slice(1, 4)
// document.write(selectedCities);

// Q# 12

// var arr = ['This', 'is', 'my', 'cat'];
// document.write(arr.join())

// var arr = ['This', 'is', 'my', 'cat'];
// document.write(arr.join(' '))