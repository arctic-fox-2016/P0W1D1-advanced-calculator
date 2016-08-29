"use strict";
const PI = 3.14

//fungsi penjumlahan
class Calculator {
  constructor(x){
      this.x = x;
  }
    penjumlahan(y){
    this.x += y;
    return this;
}

result (){
  console.log(this.x)
}
}

let test=new Calculator (2);
test.penjumlahan(5)
test.result();


// fungsi Pengurangan
class Calculator {
  constructor(x){
      this.x = x;
  }

      pengurangan(y){
      this.x -= y;
      return this;
  }

result (){
  console.log(this.x)
}
}

let test=new Calculator (7);
test.pengurangan(5)
test.result();

//fungsi perkalian

class Calculator {
  constructor(x){
      this.x = x;
  }

      perkalian(y){
      this.x *= y;
      return this;
  }

result (){
  console.log(this.x)
}
}

let test=new Calculator (2);
test.perkalian(4)
test.result();



//fungsi pembagian
class Calculator {
  constructor(x){
      this.x = x;
  }

      pembagian(y){
      this.x /= y;
      return this;
  }

result (){
  console.log(this.x)
}
}

let test=new Calculator (8);
test.pembagian(4)
test.result();

//fungsi pangkat
class Calculator {
  constructor(x){
      this.x = x;
  }

      pangkat(y){
      this.x = Math.pow(this.x,y);
      	return this;
  }

result (){
  console.log(this.x)
}
}

let test=new Calculator (2);
test.pangkat(3)
test.result();



//fungsi akar
class Calculator {
  constructor(x){
      this.x = x;
  }

      akar(y){
      this.x = Math.sqrt(this.x);
      return this;
  }

result (){
  console.log(this.x)
}
}

let test=new Calculator (144);
test.akar()
test.result();


//fungsi Pi , Menghitung Lingkaran
class Calculator {
  constructor(x){
      this.x = x;
			}

      lingkaran(y){
      this.x =PI*this.x*this.x;
			return this;
  }

result (){
  console.log(this.x)
}
}

let test=new Calculator(7);
test.lingkaran()
test.result();


/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/
"use strict";

export class Calculator {
  //write your code here
}

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/
