

class Observer {


    constructor() {
        this.observerlist = [];
    }

    subcriber(observer) {
        this.observerlist.push(observer);
    }
    notify(message) {
        this.observerlist.forEach(func => func(message));
    }
    unsubscribe(observer) {
        this.observerlist = this.observerlist.filter(item => item !== observer)
    }

}


let facebook = new Observer();

function ob1(message) {
    console.log(`hi thank you user1 ${message}`)

}
function ob2(message) {
    console.log(`hi thank you user2 ${message}`)

}
facebook.subcriber(ob1);
facebook.subcriber(ob2);
facebook.notify("hello");


const subject = new Subject();
subject.subscribe(msg => console.log(`hello ${msg}`));
const foo = msg => console.log(`observer ${msg}`)
subject.subcriber(foo);

subject.emit("hi");
subject.unsubscribe(foo);
subject.emit("low");
write implmentation fo the observer pattern


