
const enum StatusStudent {
  enrollee = 'enrollee',
  student =  'student',
  graduate = 'graduate',
  bachelor = 'bachelor',
}

abstract class Person {
  age?: number;
  protected createAt: Date = new Date();
  protected updateAt?: Date;
  id: Symbol = Symbol('studentID');

  constructor(name: string);
  constructor(name: string, age: number | undefined);

  constructor(public readonly name: string, age?: number | undefined) {
    if (typeof age === 'number') {
      this.age = age;
    }
  }

  getInfo(): string {
    if (this.age) {
      return `${this.name}, age ${this.age}`;
    }
    return `${this.name}`;
  }

  abstract logger():void;
}

class Student extends Person {
  static readonly school = 'Methed';
  static count: number = 0;
  status:StatusStudent = StatusStudent.enrollee;
  course?: string;
  _module: number = 0;

  constructor(name: string);
  constructor(name: string, age: number  | undefined);
  constructor(name: string, course: string);
  constructor(name: string, course: string, age: number);

  constructor(
    public name: string,
    courseOrAge?: string | number,
    age?: number) {

    let ageOrUndefined: number | undefined;
    ;
    if (typeof courseOrAge === 'number') {
      ageOrUndefined = courseOrAge;
    }
    if (age) {
      ageOrUndefined = age;
    }
    super(name, ageOrUndefined);
    if (typeof courseOrAge === 'string') {
      this.course = courseOrAge;
      this.changeStatus(StatusStudent.student);
    }

    Student.count ++;
  }

  get info():string {
    return `${this.name} is studying ${this.course}, module: ${this.module}`;
  }

  set module(module: number) {
    this._module = module
    this.updateAt = new Date();
  }

  private changeUpdateDate() {
    this.updateAt = new Date();
  }


  changeStatus(status: StatusStudent):void {
    this.status = status;
    this.changeUpdateDate();
  }

  changeInfo(course: string):void;
  changeInfo(module: number):void;
  changeInfo(course: string, module: number):void;
  changeInfo(courseOrModule: string | number, module?: number):void {
    if (typeof courseOrModule === 'string') {
      this.course = courseOrModule;
    }
    if (typeof courseOrModule === 'number') {
      this.module = courseOrModule;
    }
    if (module) {
      this.module = module;
    }
    this.changeUpdateDate();
  }

  static createStudents(list: string[], course: string): Student[] {
    return list.map(name => new Student(name, course));
  }

  override getInfo(): string {
    const info = super.getInfo();
    if (this.course) {
      return `${info}, course: ${this.course}`;
    }
    return info;
  }

  static cteateStudentFromPerson(person: Person): Student;
  static cteateStudentFromPerson(person: Person, course: string): Student;

  static cteateStudentFromPerson(person: Person, course?: string): Student {
    return person.age ?
        course ?
          new Student(person.name, course, person.age) :
          new Student(person.name, person.age)
        :
        course ?
          new Student(person.name, course) :
          new Student(person.name);
  }

  static {
    console.log(Student.count);
  }

  logger():void {
    console.log(this);
  }
}


// const person1: Person = new Person('Petr', 24);
// console.log('person: ', person1.getInfo());

// const studentPetr: Student = Student.cteateStudentFromPerson(person1, 'Design');
// console.log(studentPetr);

const student1:Student = new Student('Fedor', 'FrontEnd');
console.log('student: ', student1.getInfo());

/*

const student2:Student = new Student('Dmitry', 'Frontend');
const student3:Student = new Student('Artur', 18);
const student4:Student = new Student('Gena', 'JS', 25);

student2.changeInfo('Web');
student3.changeInfo(2);
student4.changeInfo('TS', 3);

console.log(student1);
console.log(student2);
console.log(student3);
console.log(student4);

const students = Student.createStudents(['Kolya', 'Masha', 'Ivan'], 'React');
console.log(students);
console.log(Student.school);
console.log(Student.count);


*/