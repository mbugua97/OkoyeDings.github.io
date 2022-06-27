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
var myArray2 =new Array();
myArray2[0]=8;
myArray2[1]=6;
myArray2[2]="hello";

var myCar = new Object();
myCar.maxSpeed =40;
myCar.driver="dings";
console.log(myCar.driver);
myCar.drive=function(){ console.log("now driving");};
console.log(myCar.drive());

var myCar2 ={

    maxSpeed:30, 
    driver:"okoye", 
    drive:function(speed , time){

        console.log("The distance traveled is " + speed * time);

    },
    test:function(){
        console.log(this);
    }
};
myCar2.test();
console.log(myCar2.maxSpeed);
console.log(myCar2.drive(4 ,4));


//THIS KEYWORLD
//console.log(this); 
//u can also do the (test function)
//we use the THIS keyword instread of writting an array overe and over again


//CONSTRUCTOR FUNCTIONS
var Man =function(maxspeed,name){

    this.maxSpeed=maxspeed;
    this.name=name;
    this.speedcheck=function(speed,time){
        console.log(speed * time);
    };
    this.namecheck=function(){
        console.log("driver name is " + this.name );
    };

}

var myMan= new Man(70,"dings");
var myMan1= new Man(40,"hills");
var myMan2= new Man(50,"game");
var myMan3= new Man(30,"game");

myMan.namecheck();
myMan.speedcheck(3,10);
myMan3.namecheck();


//THE DATE OBJECT
var myDate= new Date();
// document.write(myDate);
var myPastDate= new Date(2002,5,4,10,30,02);
console.log(myPastDate);

console.log("the date is " + myDate.getTime());

//THE DOM
//DOCUMENT OBJECT MODEL
    document.getElementsByClassName("address");
    var myAdressDivs =document.getElementsByClassName("address");

// var myH2= myAdressDivs[0].getElementsByTagName("h2");
//now to change the ellements inside u have to tag it and call it out with innerhtml and by adding equals to u can change everything on the page
// document.getElementById("page-title")


// var link =document.getElementById("page-title");

// link
// <a href=​"a" id=​"page-title">​link 0​</a>​ when u call out the link
// link.getAttribute("href");the get attribute to call out the head property
// 'a'
// link.getAttribute("id");
// 'page-title'
// link.setAttribute("id","page-new"); to change the attribute name or class
// link.setAttribute("class","hello"); and u can also use it to set new atribute


//how to edit css with java script
    // var page = document.getElementById("page-con");

    // page.setAttribute("style","position: relative;");

    // page.setAttribute("style","position: relative; left: 10px;");

    // page.style.left="30px"; short from

//creating a new element
      // var newA =document.createElement("a");
      // var menu=document.getElementsByClassName("a")[0];
      // menu.appendChild(newA);
      // newA.innerHTML=("nice");
      // and.insertBefore is to place the element first

//Removing elements from the DOM 
    
