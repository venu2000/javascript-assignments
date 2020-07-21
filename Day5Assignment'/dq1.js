var inputArray = [];
var size = prompt("enter size of array",size); //Maximum Array size

for(var i=0; i<size; i++) {
	
	//Taking Input from user
	inputArray[i] = prompt('Enter Element ' + (i+1));
    inputArray= inputArray.filter((item) => item % 2 === 1)
    
}

//Print the cube od array in the console.
inputArray.forEach(eL=> {
    console.log(eL**3)
    

}


)
