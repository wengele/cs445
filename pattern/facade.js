class Bank {
    verify(name, amount) {
        // complex logic ...
        return true;
    }
}
class Credit {
    get(name) {
        // complex logic ...
        return true;
    }
}
class Background {
    check(name) {
        // complex logic ...
        return true;
    }
}


class Mortgage {

    constructor(name) {
        this.name = name;
    }

    applyfor(amount) {
        let result = "approved";
        if (!new Bank().verify(this.name, amount)) {
            result = "denied";
        } else if (!new Credit().get(this.name)) {
            result = "denied";
        } else if (!new Background().check(this.name)) {
            result = "failed";
        } else {
            throw new Error("sorry you are not approved");
        }
        return result;
    }


}


let person = new Mortgage();

person.applyfor(10000);