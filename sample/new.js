function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  
const car1 = new Car('Eagle', 'Talon TSi', 1993);
  
console.log(car1.make);
// Expected output: "Eagle"

// 空のインスタンスを作る
let car2 = new Car();

console.log(car2.year);
// Expected output: undefined

car2.year = 2007;

console.log(car2.year);
// Expected output: 2007