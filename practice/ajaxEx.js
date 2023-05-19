let student = {
    firstname: "wengel",
    lastname: "addis",
    age: 3,
    status: { name: "selam" },
    func: function getFirstname() {
        return firstname;
    }
};


let newS = JSON.stringify(student);


console.log(newS);
let parsed = JSON.parse(newS);
console.log(parsed);