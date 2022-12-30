class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name
    }
}

class Student extends Person {
    rollNumber: string;
    courses: string[] = []
    constructor(name: string, age: number, rollNumber: string) {
        super(name, age);
        this.rollNumber = rollNumber;
    }
    registerForCourses(course: string) {
        this.courses.push(course)
    }
}


class Instuctor extends Person {
    salary: number;
    courses: string[] = [];

    constructor(name: string, age: number, salary: number) {
        super(name, age)
        this.salary = salary;
    }
    assignCourse(course: string) {
        this.courses.push(course)
    }
}

class Course {
    id: string;
    name: string;
    students: Student[];
    instructor: Instuctor[];

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
    }
}





const student1 = new Student("Abdullah", 45, "5726975");
const student2 = new Student("Sameer", 25, "4546465465");
const instructor1 = new Instuctor("Zia Khan", 25, 45000);
const instructor2 = new Instuctor("Inzamam Malik", 36, 45000);

console.log('student1:', student1);
console.log('student2:', student2);
console.log('Instructor1:', instructor1);
console.log('Instructor2:', instructor2);

