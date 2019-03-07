// CODE here for your Lambda Classes
class Person {
    constructor(attr){
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
        this.gender = attr.gender;
    }
    speal(){
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Person{
    constructor(attr){
        super(attr);
        this.specialty = attr.specialty;
        this.favLanguage = attr.favLanguage;
        this.catchPhrase = attr.catchPhrase;
    }
    demo(subject){
        return `Today we are leaning about ${subject}`;
    }
    grade(student,subject){
        return `${student.name} receives a perfect score on ${subject}`;
    }
}

class Student extends Person{
    constructor(attr){
        super(attr);
        this.previousBackground = attr.previousBackground;
        this.className = attr.className;
        this.favSubjects = attr.favSubjects;
    }
    listsSubjects(){
        return `these are my favorite classes ${this.favSubject}`
    }
    PRAssignments(subject){
        return `${this.name} has submitted a PR for ${subject}`
    }
}
class ProjectManager extends Instructor{
    constructor(attr){
        super(attr);
        this.gradClassName = attr.gradClassName;
        this.favInstructor = attr.favInstructor;
    }
    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standy times! `
    }
    debugsCode(student,subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}
const josh = new Instructor({
    name: "Josh Knell",
    age: 40,
    location: "Utah",
    gender: "male",
    specialty: "HTML/CSS/Javascript",
    favLanguage: "CSS",
    catchPhrase: "let me play the banjo!"
});
const cameron = new Instructor({
    name: "Cameron Pope",
    age: 35,
    location: "California",
    gender: "male",
    specialty: "React",
    favLanguage: "Javascript",
    catchPhrase: "lets learn!"
});
const curtis = new Student({
    name: "Curtis Hubbard",
    age: 21,
    location: "Oregon",
    gender: "male",
    reviousBackground: `Professional cat magician that shows magic to cats because he can`,
    className: "WEB18",
    favSubjects: ["Html", "CSS", "JavaScript"],
    grade: 90

});
const tim = new Student({
    name: "tim cook",
    age: 80,
    location: "Seattle",
    gender: "male",
    className: "WEB01",
    favSubjects: ["Java", "Python", "JavaScript"],
    grade: 50
});
const jim = new ProjectManager({
    name: "sammy sam",
    age: 43,
    location: "Seattle",
    gender: "female",
    specialty: "java",
    favLanguage: "Python",
    catchPhrase: "stay classy san diego ",
    gradClassName: `WEB17`,
    favInstructor: `Josh`
});
const jessica = new ProjectManager({
    name: "jessica r",
    age: 26,
    location: "california",
    gender: "female",
    specialty: "python",
    favLanguage: "CSS",
    catchPhrase: "i love lambda",
    gradClassName: `WEB16`,
    favInstructor: `Josh`
});


console.log(josh.demo('Javascript'));
console.log(cameron.demo('HTML'));
console.log(josh.grade(curtis,'JS'));
console.log(tim.favSubjects);
console.log(jessica.debugsCode(tim,'Javascript'));
