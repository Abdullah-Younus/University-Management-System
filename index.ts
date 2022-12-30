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
    courses: Course[] = []
    constructor(name: string, age: number, rollNumber: string) {
        super(name, age);
        this.rollNumber = rollNumber;
    }
    registerForCourses(course: Course) {
        this.courses.push(course)
    }
}


class Instuctor extends Person {
    private salary: number;
    courses: Course[] = [];

    constructor(name: string, age: number, salary: number) {
        super(name, age)
        this.salary = salary;
    }
    assignCourse(course: Course) {
        this.courses.push(course)
    }
}

class Course {
    id: string;
    name: string;
    students: Student[] = [];
    instructor!: Instuctor;

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
    }

    addStudent(student: Student) {
        this.students.push(student)
        student.registerForCourses(this)
    }
    setInstructor(instructor: Instuctor) {
        this.instructor = instructor;
        instructor.assignCourse(this)
    }
}

class Department {
    name: string;
    courses: Course[] = [];
    constructor(name: string) {
        this.name = name
    }
    addCourse(course: Course) {
        this.courses.push(course);
    }
}




const student1 = new Student("Abdullah", 45, "5726975");
const student2 = new Student("Sameer", 25, "4546465465");
const instructor1 = new Instuctor("Zia Khan", 25, 45000);
const instructor2 = new Instuctor("Inzamam Malik", 36, 45000);
const course1 = new Course("5729", "BlockChain");
const course2 = new Course("654123", "AI");

course1.addStudent(student1);
course1.addStudent(student2);
course1.setInstructor(instructor1);

console.log(course1);

const department = new Department("Science");
department.addCourse(course1)
department.addCourse(course2)







// console.log('Student1:', student1);
// console.log('Student2:', student2);
// console.log('Instructor1:', instructor1);
// console.log('Instructor2:', instructor2);
// console.log('course1:', course1);
// console.log('course2:', course2);

