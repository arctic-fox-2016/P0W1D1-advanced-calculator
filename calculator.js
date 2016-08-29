"use strict";

const PI = 3.1415926;

export class Calculator {
  //write your code here
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  add() {
    return this.x + this.y;
  }

  subtract() {
    return x - y;
  }
  multiply() {
    return x * y;
  }

  divide() {
    return x / y;
  }

  power() {
    return Math.pow(x, y);
  }

  root() {
    return Math.pow(x, 1/y);
  }

  circleArea(r) {
    return PI * r * r;
  }
}



/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/
