"use strict";

export class Calculator {
  //writcle your code here
}

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

const PI = 3.14;

class Calculator {
  constructor(x){
    this.x =x;
  }
  add (a){
    this.x +=a;
    return this;
  }
  substract(b){
    this.x -=b;
    return this;
  }
  multiply (c){
    this.x *=c;
    return this;
  }
  divide (d){
    this.x /=d;
    return this;
  }
  pangkat (e){
    this.x = Math.pow(this.x,e);
    return this;
  }
  akar (f){
    this.x = Math.sqrt(this.x);
    return this;
  }
  lingkaran(r){
    return PI*r*r;
  }
  result(){
    console.log(this.x);
  }
}

let test = new Calculator(14);
console.log(test.lingkaran(7));
