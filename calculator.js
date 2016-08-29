"use strict";

export class Calculator {
  //write your code here
  constructor(x){
    this.x = x;
  }

  add(y){
    return this.x + y;
  }

  substract(y){
    return this.x - y;
  }

  multiply(y){
    return this.x * y;
  }

  divide(y){
    return this.x / y;
  }

  power(y){
    return Math.pow(this.x, y);
  }

  root(){
    return Math.sqrt(this.x);
  }

  circle(y){
    return Math.pow(this.x, 2) * Math.PI;
  }
}


/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/
