var x =prompt("enter your sales")
if (x >= 0 && x <= 5000) {
   
    console.log(" Congratulation! you have earned 2% comisiion");
  
} else if(x >= 5001 && x <= 10000) {
  console.log("Congratulations! tyou have earned 5% comission");

}else if(x >= 10001 && x <= 20000){
  console.log("Congratulations you have earned 7% comission")

}else if (x >= 20000)
  console.log("Congratulations! you have won 10% comission")