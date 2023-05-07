

class Adiss {

    constructor(name, age) {
        this.name = name;
        this.age = age;

        if (!Adiss.x) {
            this.name = name;
            this.age = age;
            Adiss.x = this;
        }
        return Adiss.x;
    }
}


let win = new Adiss("dor", 12);

let wi = new Adiss("do", 11);

console.log(win === wi);


let singlton = (function () {

    let neww;
    return {
        getvalue: function () {
            if (!neww) {
                neww = new Object("this is the new value", "saki")
            }
            return neww;
        }
    }

})()
let samm = singlton.getvalue();
let sa = singlton.getvalue();

console.log(samm === sa);