function sum(x,y){
	return x+y
}
console.log(sum(4,5))

function avg(x,y,z){
	return (x+y+z)/3
}

console.log(avg(4,3,2))

function getLength(a){
    return a.length
}

console.log(getLength("ryan"))

function greaterThan(x,y){
	return x>y 

}
console.log(greaterThan(10,3))



function greet (name) {
	return "Hello, "+ name + "!"
}
console.log(greet('Ryan'))

function madlib (word1, word2, word3, word4) {
	var str = 'quick' , 'fox' , 'fence'
	return  "The "+ word1 +" brown " + word2 +" "+ word3 +  " over the " + word4 + "."
}
console.log(madlib('quick', 'fox', 'jumps', 'fence'))