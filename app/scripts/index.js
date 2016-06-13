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

          console.log('method hasOwnProperty', kay.hasOwnProperty('name'));

//  3. as a constructor (new);

          function Dog(thing){  //when you want to use a function as a constructor
                                //always name it starting with a capital letter
                                //instead of in camelcase.
            console.log('constructor. this', this);

            this.height = 'short';

            this.wag = function(thing){
              console.log("wag ", thing);
            }
            //console.log("wag ", thing);
          }

          var oliver = new Dog(); //creates a new object called dog that is assigned to the variable oliver
          var kepler = new Dog(); //creates a new object called dog that is assigned to the variable kepler

          oliver.wag('tail');
          kepler.wag('ears');

          kepler.length = 'long';

          console.log('kepler', kepler);
          console.log('oliver', oliver);

          function Fruit(){

          }

          var fruit = new Fruit();

// 4.




//Inheritance

function Truck(){
  this.doors = 2;
  this.bed = true;
}

Truck.prototype.go = function(){  //accesses the function Truck and adds the
                                  //method go and adds it to Trucks prototype
  console.log('vroom');
}

var genericTruck = new Truck();
console.log(genericTruck);
genericTruck.go();



function Dodge(){
  this.engine = 'hemi';
  this.ram = true;
}

Dodge.prototype = new Truck(); //adds the new Truck constructor to the prototype
                               //of Dodge


var dakota = new Dodge();

console.log(dakota.doors);
dakota.go();
