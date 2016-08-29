"use strict";



/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

class Calculator {
  constructor(x){
    this.x = x;
  }

  add (a){
    this.x += a;
    return this;
  }

  substract (b){
    this.x -= b;
    return this;
  }

  mult (c){
    this.x *= c;
    return this;
  }

  div (d){
    this.x /= d;
    return this
  } 

  pangkat (f){
    this.x = Math.pow(this.x,f);
    return this;
  }

  akarKuadrat(){
    this.x = Math.sqrt(this.x);
    return this;
  }

  lingkaran (){
    this.x = Math.PI*this.x*this.x;
    return this;
  }

  result(){
    console.log(this.x);
  }
}
let test = new Calculator(9);
test.lingkaran();
test.result();
console.log("test");
