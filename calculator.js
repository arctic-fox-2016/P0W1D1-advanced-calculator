"use strict";

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/
"use strict";

const PI = 3.14;

export class Calculator {
  constructor(a){
    this.a = a;
  }
  penjumlahan(b){
    this.a += b;
    return this;
  }
  pengurangan(b){
    this.a -= b;
    return this;
  }
  perkalian(b)
  {
    this.a *= b;
    return this;
  }
  pembagian(b){
    this.a /= b;
    return this;
  }
  pangkatAngka(a){
    Math.pow(this.a,b);
    return this;
  }
  akarKuadrat(a){
    Math.sqrt(this.a);
    return this;
  }
  luasLingkaran(r){

        return PI * r * r;
  }
  result(){
    console.log(this.a);
    return this;
  }
}




/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/
