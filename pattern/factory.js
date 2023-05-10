class FullTime {
    constructor() {
        this.hourly = "$12";
    }
}
class PartTime {
    constructor() {
        this.hourly = "$12";
    }
}
class Temporary {
    constructor() {
        this.hourly = "$10";
    }
}

class Factory {

    createEmployee(type) {
        let employee;

        if (type === "fulltime") {
            employee = new FullTime();
        } else if (type === "parttime") {
            employee = new PartTime();
        } else {
            employee = new Temporary();
        }

        employee.type = type;

        employee.getvalue = function () {
            console.log(`the employee is ${this.type} and the hr payment is ${this.hourly}`);
        }

        return employee;

    }
}

let employees = [];
let emp = new Factory();

employees.push(createEmployee("fulltime"));
employees.push(createEmployee("partime"));


for (let i = 0; i < employees.length; i++) {
    employees[i].getvalue();
}