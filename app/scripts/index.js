//Strings are not mutable.
//Assignment is "by value" - the value will not be changed when manipulated
//within a function.

var kepler = "He loves";
var item = " treats";
var  keplerSays = kepler + item;

console.log(keplerSays); //"He loves treats"

function keplerSpeaks(prefix, suffix){
  prefix += suffix;
  console.log(prefix);
};

keplerSpeaks(kepler, item);

console.log(kepler);

//Numbers are not mutable.
//Assignment is "by value" - the value will not be changed when manipulated
//within a function.

var number1 = 10;
var number2 = 20;

function add(num1, num2){
  num1 += num2;
  console.log(num1);
}

add(number1, number2);

console.log(number1);

//Objects are mutable
//Assignment is "by reference" or "by sharing" - finds the object and changes
//the property to the new value, so 'treats' gets changed to 'balls'

var kepler = {
  likes: 'treats'
};

console.log(kepler);  //will see "{likes: 'treats'}"

function likesSomethingNew(dog){
  //console.log(dog);
  dog.likes = 'people';
  dog.chases = 'balls'; //will add the property chases to the object kepler
                        //passed to the fucntion as the argument for the parameter dog.
  console.log(dog); //will see "{likes: 'people', chases: 'balls'}"
}

likesSomethingNew(kepler)


console.log(kepler); //will see "{likes:'people', chases: 'balls'}"


//Objects have properties and methods

//4 ways to call a function in javascript
//  1. by it's name:
//
//            functionName();
//
//  2. as a method:
//
//            var kay = {
//              sayHello: function(){
//              return "Woof";
//              }
//            };
//
//            kay.sayHello();

function sayHello(){
  console.log('regular', this);
}
sayHello();

var kay = {
  name: 'Kay',
  sayHello: function(){
    console.log('regular1', this);
    console.log(this.name);
    return "Woof";
  }
};

kay.sayHello();
