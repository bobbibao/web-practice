var D = new Date()
var DoB, presentYear, age;
presentYear = D.getFullYear()
do{
    DoB = parseInt(prompt("Enter your birthyear: "))

}while(DoB < 0 || DoB > presentYear)
age = presentYear - DoB
document.write("Your age: " + age)