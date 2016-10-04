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
	 var list = ['a', 'e','i','o','u','y']
	 
	if(list .indexOf(char) == -1){
		return false
	}else{
		return true
	}
}
console.log(isVowel('e'))

function Rovarspraket(phrase){
	var newWord = "";
	 
	 for(var i = 0; i < phrase.length; i += 1) {
	 	
	 	if(isVowel(phrase[i])){
         newWord += phrase[i];
	 	} else  {
	 	newWord += phrase[i] + "o" + phrase[i];
       
	 }
	 
	 
	}
	return newWord;
}

console.log(Rovarspraket("ryan"))

function reverse(phrase){
	var newWord = "";
	for(var i = phrase.length - 1; i > -1; i -= 1){
		newWord += phrase[i]
	}
	return newWord 

}
console.log(reverse("ryan"))
