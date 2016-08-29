"use strict";


/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

class Calculator {
  constructor(angka) {
    this.angka = angka;
  }

  tambah(input) {
    return this.angka+input;
  }

  kurang(input) {
    return this.angka-input;
  }

  kali(input) {
    return this.angka*input;
  }

  bagi(input) {
    return this.angka/input;
  }

  pangkat(input){
    return Math.pow(this.angka,input);
  }

  akar(input){
    return Math.sqrt(this.angka,input);
  }

  luasLing(){
    const PI = 3.14;
    return PI*this.angka*this.angka;
  }


}

const calc = new Calculator(9);

console.log(calc.kurang(5));
console.log(calc.tambah(10));
console.log(calc.kali(5));
console.log(calc.bagi(3));
console.log(calc.pangkat(2));
console.log(calc.akar(2));
console.log(calc.luasLing());
