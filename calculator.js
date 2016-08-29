"use strict";

const PI = 3.1415

export class Calculator {
  //write your code here
  constructor(x){
    this.x = x
  }

  add (y){
    this.x += y
    return this
  }

  sub (z){
    this.x -= z
    return this
  }

  multiply (k){
    this.x *= k
    return this
  }

  div (b){
    this.x /= b
    return this
  }

  power (p){
    this.x ^= p
    return this
  }

  sqrt (a){
    this.x = Math.sqrt(a)
    return this
  }

  area (r){
    this.x = PI*r*r
    return this
  }

  result(){
    console.log(this.x)
  }

}
/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/
