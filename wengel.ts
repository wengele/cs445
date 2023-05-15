/*const image: {
    src: string;
    coords: number[];
    alignment: string;

} = {
    src: "hi",
    coords: [250, 150, 350, 400],
    alignment: "center"

}*/


interface Imsg {
    text: string;
    offset: [number, number];

}


let messages: Imsg[] = [

    { "text": "save", offset: [10, 20] },
    { "text": "save", offset: [10, 20] },

    { "text": "save", offset: [10, 20] }


]


for (let megs of messages) {
    console.log(megs);
}



class Student {

    firstname: string;
    lastname: string;
    courses: Array<string | number>

    constructor(firstname: string, lastname: string,
        courses: Array<string | number>) {

        this.firstname = firstname;
        this.lastname = lastname;
        this.courses = courses;


    }

    setCourse(courses: Array<string | number>): void {

        this.courses = courses;



    }

    getCourses() {

        return this.courses;


    }



}





