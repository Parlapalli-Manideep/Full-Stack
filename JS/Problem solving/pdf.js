// Create a function that takes two numbers as arguments and returns their sum
num1 = +prompt("Enter first number: ")
num2 = +prompt("Enter second number: ")
sum = add(num1, num2)
console.log(sum)

function add(a, b) {
    return a + b
}

// Write a function that takes an integer minutes and converts it to seconds.
min = prompt("Enter minutes: ")
sec = convert(min)
console.log(sec)
function convert(a) {
    return a * 60
}

// Create a function that takes a number as an argument, increments the number by +1 and returns the result.
num = +prompt("Enter a number: ")
inc = added(num)
console.log(inc)
function added(a) {
    return a + 1
}

// Create a function that takes the age in years and returns the age in days.
num = +prompt("Enter NO. of years: ")
days = convert(num)
console.log(days)
function convert(a) {
    return a * 365
}

// sniCreate a function that takes voltage and current and returns the calculated power
voltage = prompt("Enter voltage: ")
current = prompt("Enter current: ")
power = convert(voltage, current)
console.log(power)
function convert(a, b) {
    return a * b
}

// Write a function that returns the string "something" joined with a space " " and the given argument a.
str = prompt("Enter a string: ")
join = func(str)
console.log(join)
function func(a) {
    return "something" + " " + a
}

// Create a function that takes two arguments. Both arguments are integers, a and b. Return true if one of them is 10 or if their sum is 10.
a = +prompt("Enter first number: ")
b = +prompt("Enter Second number: ")
res = check(a, b)
console.log(res)
function check(a, b) {
    if (a == 10 || b == 10 || a + b == 10)
        return true
    return false
}

// Create a function that takes two strings as arguments and returns either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.
a = prompt("Enter first string: ")
b = prompt("Enter second string: ")
count1 = check(a)
count2 =check(b)
console.log(count1 == count2)
function check(a )
{
    count = 0
    for(i of a)
        count++
    return count
}