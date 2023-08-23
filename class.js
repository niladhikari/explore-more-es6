
class Teacher{
    constructor(name, subject){
        this.name = name;
        this.subject = subject;
    }
    lecture(){
        console.log('Sir is teaching Math')
    }
}

const tapan = new Teacher('Tapon sir', 'Physics')
// console.log(tapan);

const rashid = new Teacher('Rashid', 'English')

// another class for student
class students {
    constructor(name,id,age,dept){
       this.name = name;
       this.id = id;
       this.age = age;
       this.dept = dept;
    }
//    student(){
//        console.log('The good student');
//    }
}

const student = new students('Hridoy',192,23,'cse');
console.log(student);