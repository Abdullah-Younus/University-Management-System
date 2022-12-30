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
const student1 = new Student("Abdullah", 45, "5726975");
const student2 = new Student("Sameer", 25, "4546465465");
const instructor1 = new Instuctor("Zia Khan", 22, 45000);
instructor1.assignCourse("metaverse");
console.log('Instructor:', instructor1);
export {};
