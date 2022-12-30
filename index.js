class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
}
class Student extends Person {
    rollNumber;
    courses = [];
    constructor(name, age, rollNumber) {
        super(name, age);
        this.rollNumber = rollNumber;
    }
    registerForCourses(course) {
        this.courses.push(course);
    }
}
class Instuctor extends Person {
    salary;
    courses = [];
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
    }
    assignCourse(course) {
        this.courses.push(course);
    }
}
class Course {
    id;
    name;
    students;
    instructor;
    constructor(id, name) {
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
export {};
