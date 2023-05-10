class Regularbulb {
    constructor() {
        this.color = "pink";

    }
}
class Energybulb {
    constructor(color) {
        this.color = "blue";

    }
}

class Factory {
    createBulb(type, color) {
        let blubs;
        if (type === "regular") {
            blubs = new Regularbulb;
        } else if (type === "energy") {
            blubs = new Energybulb(color);
        }
        blubs.type = type;
        return blubs
    }
}

const bulbs = [];
const factory = new Factory();

bulbs.push(factory.createBulb("regular"));
bulbs.push(factory.createBulb("energy", "red"));
for (let i = 0, len = bulbs.length; i < len; i++) {
    console.log(bulbs[i]);
}