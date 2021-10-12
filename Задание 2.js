let array = ["asdf", 1, true, undefined];
let numArray =0

while (numArray < 4) {
if ((typeof array[numArray]) === "string")
  
{console.log(`${array[numArray]} - это строчный тип`);} 
else if 
((typeof array[numArray]) === "boolean")
  
{console.log(array[numArray]+" - это логический тип");} 
else if 
((typeof array[numArray]) === "number")
  
{console.log(array[numArray]+" - это числовой тип");} 
else if 
((typeof array[numArray]) === "undefined")
  
{console.log(array[numArray]+" - тип не определен");} 
 numArray++}