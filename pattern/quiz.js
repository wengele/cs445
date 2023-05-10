let counterModule = (function () {
    let counter = 1;

    return {
        incrementCounter: function () {

            return counter++;
        },
        resetCounter: function () {
            return counter = 0;
        },

    }


})()

console.log(counterModule.incrementCounter()); //return 1

console.log(counterModule.incrementCounter()); //return 2

console.log(counterModule.incrementCounter()); //return 3

console.log(counterModule.resetCounter());

console.log(counterModule.incrementCounter()); //return 1




/*class Subject {


    constructor() {
        this.observer = [];
    }
    on(event, fn) {
        if (this.observer[event]) {
            this.observer[event].push(fn);
        } else {
            this.observer[event] = [fn];
        }
    }
    emit(event, message) {
        this.observer[event].forEach(fn => fn(message));
    }
}*/
