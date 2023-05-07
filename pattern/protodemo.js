const car = {
    name: "bmw",

    drive: function () {

        console.log(`the speed of my car is ${this.speed}`);

    },

    honk: function () {

        console.log(`I love my ${this.name}`);

    }



}

let newcar = Object.create(car);

newcar.name = "jeep";

newcar.speed = "60mph";
newcar.honk();
newcar.drive();
