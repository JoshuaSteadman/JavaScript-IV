// Person Class our Parent class constructor function let the prototyping begin.
class Person {
    constructor(attr) {
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`
    }
}

// Instructor Class
class Instructor extends Person {
    constructor(attr) {
        super(attr);
        this.specialty = attr.specialty;
        this.favLanguage = attr.favLanguage;
        this.catchPhrase = attr.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}.`;
    }
    grade(subject) {
        return `${student.name} receives a perfect score on ${subject}.`
    }
}

// Student class
class Student extends Person {
    constructor(attr) {
        super(attr);
        this.previousBackground = attr.previousBackground;
        this.className = attr.className;
        this.favSubjects = attr.favSubjects;
    }
    listsSubjects() {
        return `${this.favSubjects}`;
    }
    PRAssignment(subject) {
        return `${student.name} has submitted a PR for ${subject}.`;
    }
    sprintChallenge(subject) {
        return `${student.name} has begun the sprint challenge on ${subject}.`
    }
}

// Team Lead class
class TeamLead extends Instructor {
    constructor(attr) {
        super(attr);
        this.gradClassName = attr.gradClassName;
        this.favInstructor = attr.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}.`
    }
}

// Instructor Object Template
const instructor = new Instructor ({
    name: 'Mario',
    location: 'Rainbow Road',
    age: 28,
    specialty: 'Rescuing princesses',
    favLanguage: 'RUST',
    catchPhrase: 'Here we go!!!'
});

// Student Object Template
const student = new Student ({
    name: 'Joshua',
    location: 'Steadman',
    age: 33,
    previousBackground: 'Carpentry',
    className: 'WEB23',
    favSubjects: ['ELM', 'CSS', 'JavaScript', 'Theory']
});

// Team Lead Object Template
const teamLead = new TeamLead ({
    name: 'Devin',
    location: 'Warrick',
    age: 21,
    gradClassName: 'WEB20',
    favInstructor: 'Josh Knell'
});

//Console log invoke our class objects

console.log(instructor.demo('Web Dev'));
console.log(instructor.grade('JavaScript I'));
console.log(student.listsSubjects());
console.log(student.PRAssignment('JavaScript II'));
console.log(student.sprintChallenge('JavaScript II'));
console.log(teamLead.standUp('#Web23_Devin'));
console.log(instructor.grade('JavaScript I'));