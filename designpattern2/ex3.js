class Info {
    logging(message) {
        console.info(message);
    }

}

class Warn {
    logging(message) {
        console.warn(message);
    }
}
class Error {
    logging(message) {
        console.error(message);
    }
}


class Table {
    logging(message) {
        console.table(message);
    }
}

class Strategy {
    setStrategy(loggingMethod) {
        this.loggingMethod = loggingMethod;
    }

    logging(message) {
        return this.loggingMethod.logging(message);
    }
}

const info = new Info();
const warn = new Warn();
const error = new Error();
const table = new Table();


const strategy = new Strategy();

strategy.setStrategy(new Info());
strategy.logging('info....');

strategy.setStrategy(new Warn());
strategy.logging('warn....');

strategy.setStrategy(new Error());
strategy.logging('error....');

strategy.setStrategy(new Table());
strategy.logging(['table', 'table']);