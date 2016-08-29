"use strict";
const PI = 3.14;
export class Calculator {
  
  addition(a,b){
    return a+b;
  }
  substract(a,b){
    return a-b;
  }
  multiply(a,b){
    return a*b;
  }
  divide(a,b){
    return a/b;
  }
  power(a,b){
    return Math.pow(a,b);
  }
  sqrt(a){
    return Math.pow(a,0.5);
  }
  area(a){
    return PI*a*a;
  }
  //write your code here
}

//addition
//substract
//multiply
//dive
//power
//sqrt
//circle
/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/
