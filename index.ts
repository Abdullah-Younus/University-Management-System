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

const student1 = new Student("Abdullah", 45, "5726975");
student1.registerForCourses("BSC");
student1.registerForCourses("Metaverse");

console.log('Student1 ==>', student1);

const student2 = new Student("Sameer", 25, "4546465465");
student2.registerForCourses('BlockChain');
console.log('student2 ===>',student2);
