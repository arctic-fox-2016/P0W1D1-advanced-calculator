"use strict";

const PI = 3.14;
//export class Calculator {
export class Calculator {


  add (x,y){
    return x + y;
  }

  substract (x,y){
    return x - y;
  }

  multiply (x,y){
    return x * y;
  }

  divide (x,y){
    return x / y;
  }

  pangkat (x,y){
    return Math.pow (x,y);
  }

  root (x,y=2){
    return Math.sqrt (x,y);
  }

  circle (r) {
    return PI * (Math.pow(r,2));
  }
}




/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/
