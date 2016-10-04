function max(x,y){
if(x>y){
	return x
}else{
	return y
}
}
console.log(max(10,4))

function maxOfThree(x,y,z){
	return Math.max(x,y,z)
}
console.log(maxOfThree(2,8,5))

function isVowel(char){
	 var list = ['a', 'e','i','o','u']
	 
	if(list .indexOf(char) == -1){
		return false
	}else{
		return true
	}
}
console.log(isVowel('e'))