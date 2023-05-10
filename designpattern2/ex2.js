class User {
    constructor(name) {
        this.name = name;
    }
}

class DecoratedUser {
    constructor(User, street, city) {
        this.user = User;
        this.name = User.name;
        this.street = street;
        this.city = city;
    }
    logger() {
        console.log(`${this.name}:${this.street}, ${this.city}`)
    }
}


const user = new User("Kelly");

const decorated = new DecoratedUser(user, "Broadway", "New York");
decorated.logger();