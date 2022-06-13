//if sand else statement
var myage=20
if ( myage < 18 || myage >30 || myage=== 20){

    console.log("you are not comiming:"); 

} else {

   console.log("you can come u cool dude:");

}

//while loop
var age= 5;
while ( age<10 ){

    console.log("your age is less that 10")
    age++;
    
}
console.log("u are now older than 10")

//text example for looping
var links =document.getElementsByTagName("a");

for (i = 0; i < links.length; i++){
      
    console.log("this is link number" + i);
    links[i].className ="link-" + i;

}
console.log("all the link have been looped");

//for loop
for(g = 0; g < 30; g++){

    if(g === 5 || g===3){
        continue; 
    }
      
    console.log(g);

    if(g === 20){
        break;
    }

}
console.log("i have broken out of the loop")

//functions
var avarage=0;
function getAvarage (a,b) {

    avarage = (a + b) / 2;
    console.log(avarage);
    return avarage

}
var myResult = getAvarage(7,7);

function logresult(){
  console.log("the average is " + myResult);
}
logresult()

//working with numbers
var a=4;
console.log(a + myResult);
//math objects
console.log(Math.round(7.5))
console.log(Math.cos(360))
//math object max=to pick the highest number
//floor= to approcimate or round uo to the lowest number
//ceil=to appocimate or round up to the highest value 

//NAN Not a number 
var c=7;
var d=5;

if(isNaN(c)){

console.log("it is not a number");

} else{

  console.log("its is a number so ur answer is " + (c + d))

}

//Strings
//To use a string in a string u have to use a single string first before adding a double string
var dings="this is a string";
console.log(dings.length);
console.log(dings.toUpperCase());
console.log(dings.toLowerCase("this"));
if (dings.indexOf("string")=== 10){

    console.log("nice guess");

} else{

    console.log("guess wrong try again");

}
//compare string 
var st1="bbb";
var st2="bbb";
console.log(st1===st2);
console.log(st1 + st2);
//Rember this is case sensitive
//to avoid that do this
var str1="AAA";
var str2="aaa";
console.log(str1.toLowerCase() === str2);
//lowercase letter is higher that uppercase latter in javascript


//slicing and spliting strings
sto1= str1.slice(2);
console.log(sto1);
 
var sto2=("mad, good, happy, sad");
console.log(sto2)
var tagara= sto2.split(",")
console.log(tagara);


//ARRAYS
var myArray=[];
myArray[0]=25;
console.log(myArray[0])
myArray[1]=35;
console.log(myArray[1]);
myArray[2]="hello";
console.log(myArray[2]);
//test function in array
var avarage2
function myArray(a,b){

    avarage2 = (a,b)/2;
    console.log(avarage2);
    return avarage2

}
var myResult2 = getAvarage(myArray[0],myArray[1]);
console.log(myResult2);

console.log(myArray);
//how to update Arrays
//U just have to call out the array and make it equal to false
myArray[0] =false;
console.log(myArray);
//Filling out the array inside the bracket
var myGuy=[21, 31,"hello",false];
console.log(myGuy);
//to limit the amought of things in the array u just need to add a number inside the array bracket
// var myArray4= new array(5)
console.log(myArray.length);
console.log(myGuy.sort());
console.log(myGuy.reverse());
console.log(myGuy.shift());
console.log(myGuy.includes());

//OBJECTS
var mystring=new String();
mystring="speeding";
console.log(mystring);
console.log(mystring.length);
console.log(mystring.toUpperCase());

//CREATING A NEW OBJECT
var myArray2 =new Array2();
myArray2[0]=8;
myArray2[1]=6;
myArray2[2]="hello";