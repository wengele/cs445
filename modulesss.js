let Student = (function () {

    //let firstName, lastName;
    let grade = [];

    return {
        student: function (firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;

        },
        enterGrade: function (score) {
            grade.push(score);

        },
        getAverageGrade: function () {
            let sum = 0;
            for (let i = 0; i < grade.length; i++) {
                sum += grade[i];
            }
            return sum / grade.length;

        },
        getStudentInfo: function () {
            return this.firstName +
                this.lastName + this.getAverageGrade();

        }



    }




})()









Student.student("jonh", "Smith");

Student.getAverageGrade();

Student.enterGrade(50);

Student.enterGrade(50);

Student.enterGrade(50);

Student.getAverageGrade();

console.log(Student.getStudentInfo());