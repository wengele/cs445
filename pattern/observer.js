

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