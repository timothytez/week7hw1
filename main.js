console.log('Matrix Hello JavaScript')

// syntax for comments

/* 
  Multi
  Line
  Comment
*/

var firstName = 'dylan';

console.log(firstName)

var lastName 
lastName = 'smith'

console.log(lastName)

console.log(firstName); console.log(lastName); var fullName = 'sean currie'

//  STRINGS 

console.log('my first string in quotes')

var myString = 'abc123'
var string1 = 'foo'
var string2 = "bar"
var string3 = 'i can\'t compile'

fullName = 'dylan' + 'smith'
console.log(fullName)
fullName = 'dylan' + ' ' + 'smith'
console.log(fullName)
fullName = firstName + lastName
console.log(fullName)

console.log(fullName[0])
//  can't index negatives to go to end 
console.log(fullName[-1])
// out of range, no but, just undefined
console.log(fullName[100])

console.log(fullName[fullName.length - 1])

// string methods

console.log(fullName.toUpperCase())

fullName = fullName.toUpperCase()

console.log(fullName)
console.log(fullName.toLowerCase())

console.log(fullName.length)

console.log(fullName.slice(0,5))
console.log(fullName.slice(-5,-1))


console.log(fullName.substring(0,5))

// 'hereinbefore' => 'in'

var s = 'hereinfore'

console.log(s.substring(4,6))

fullName = fullName.replace('SMITH', 'CURRIE')
consle.log(fullName)
    
//template literals

var greetFullName = 'Hello ${fullName} after bday you are ${33 + 1}'

console.log(greetFullName)

console.log(`Line 1
Line 2
Line 3`)

console.log(typeof fullName)

console.log(typeof 12.5)

var myNumber = 23
var myDecimal = 12.5

console.log(5 + 5)
console.log(myNumber - 3)
console.log(myDecimal * 2)
console.log(10 / 2)
console.log(Math.floor(10 / 3))
console.log(Math.floor(10 / 3))
console.log(Math.ceil(10 / 3))
console.log(Math.ceil(2.1))

console.log(10**2)

console.log(myNumber)

myNumber = myNumber + 1
console.log(myNumber)

myNumber+= 1
console.log(myNumber)

myNumber ++
console.log(myNumber)

myNumber --
console.log(myNumber)

++ muNumber 
console.log(myNumber)


console.log(myNumber ++, 114)
console.log(myNumber, 115)

console.log(++ myNumber)

console.log(10 % 4)
console.log(11 % 2)

console.log(typeof myNumber)

var stringNum = myNumber.toString()
console.log(typeof stringNum, stringNum)

var backToNum = parseInt(stringNum)
console.log(typeof backToNum, backToNum)

console.log(parseInt('2.9'))

console.log(parseFloat('2.9'))

console.log(3 +'4')
console.log(3 + parseInt('4'))

const bool1 = true

const bool2 = false

console.log(typeof bool1)

console.log(1 > 2)
console.log(1 < 2)
console.log(3 === 3)
console.log(3 =='3')
console.log(3 === '3')
console.log(1 <= 1)
console.log(!1 == 1)
console.log(1 !== 1) //not = to 1



console.log(Boolean(1), 'bool 1')
console.log(Boolean(0), '0')
console.log(Boolean(-1), '-1')
console.log(Boolean(''), '')
console.log(Boolean('foo'), 'foo')
console.log(Boolean([]), '[]')
console.log(Boolean({}), '{}')
console.log(Boolean(null), 'null')
console.log(Boolean(undefined), 'undefined')
console.log(Boolean(NaN), 'NaN')


let willUpdate

willUpdate = 'foo'

console.log(willUpdate)

willUpdate = 0

const noUpdate = 'bar'

noUpdate = 'foo'

// only use const one time can not redeclair

console.log(true && true) //true
console.log(false && true) //false
console.log(true && false) //fasle
console.log(true || false) //or (true)
console.log(false || true)
console.log(false || false)
console.log(false && false)
console.log(false || 0 || false || 1)

function f1(){
    console.log('in f1')
    return true
}

function f2(){
    console.log('in f2')
    return false
}

//f1() || f2()

// f2() && f1()

f1() && f1() && f1() && f2() && f1()

let noValue

console.log(noValue)

const placeholder = null

console.log(placeholder)

console.log(typeof placeholder)
console.log(typeof noValue)

console.log(noValue === placeholder)

if (true){
    var blockScope = 'foo'
}

console.log(blockScope)

if(!false){
    let blockScope2 = 'matrix'
    console.log(blockScope)
}

if(!false){
    const blockScope3 = 'matrix-const'
    consle.log(blockScope3)
}
//console.log(blockScope3)

// const in an array you can't cange that its an array but yu can change within

const newArray = []

newArray.push('bob dylan')

console.log (newArray)

newArray.push('the beatles')

console.log(newArray)

newArray.push('queen', 'j.cole')

console.log(newArray)

console.log(newArray.length)

console.log(newArray[3])

const studentArray = ['rual', 'milad', 'tim', 'toby']

studentArray.push('lyla', 'porter')

console.log(studentArray)
const removestudent = studentArray.pop()
console.log(removestudent)
console.log(studentArray)

console.log(studentArray.includes('rual'))
console.log(studentArray.includes('porter'))

const [student1, student2, student3, ...restOfStudents] = studentArray

console.log(student1, student2, student3, restOfStudents)


studentArray.unshift('josh')

console.log(studentArray)

console.log(studentArray.shift())
xonsole.log(studentArray)

console.log(studentArray.indexOf('tim'))

console.log(studentArray.toString())

console.log(studentArray.join(', '))

console.log(studentArray.slice(0,3))

console.log(studentArray.splice(2,2,'heather', 'mel', 'tom'))
//first 2 is starting point second 2 is how many object being taken out

console.log(studentArray)

studentArray.splice(1,0, 'senait')

console.log(studentArray)

// make an array of your favorite foods
// use a method to add 'fried tarantulas' at the end
// use another method to add 'choc ants'

const foodArray = ['crabcakes', 'pizza', 'chicken cordon bleu', '']

foodArray.push('burger', 'hotdog')

console.log(studentArray)
studentArray.splice(0,1)
console.log(studentArray)

//function <name>(){ func body }

function adder(num1, num2){
    return num1 + num2
}

const addTwoArrow = (num1, num2) => num1 + num2
console.log(addTwoArrow(2))

const arrowFunc = () => {
    return 'Matrix Arrow Func'
}
const arrowFunc2 = () => 'Matrix Arrow Func'

console.log(arrowFunc2(), 'arrow func 2')

const result = adder(10, 8)

console.log(result)

console.log((num => num**2)(10))


// var firstName = 'tim';

// console.log(firstName)

// var lastName 
// lastName = 'crooms'

// console.log(lastName)

// console.log(firstName); console.log(lastName); var fullName = 'tim crooms'

// function adder(firstName, lastName){
//     return firstName + lastName
// }

// const addTwoArrow = (firstName, lastName) => firstName + lastName
// console.log(addTwoArrow(2))

// const arrowFunc = () => {
//     return 'Matrix Arrow Func'
// }

