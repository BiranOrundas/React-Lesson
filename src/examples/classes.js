class Person {
    constructor(name,year){

        this.name = name ;
        this.year = year ;
        console.log('construction çalıştı');

    }

    calculaAge(){
        return new Date().getFullYear() - this.year;
    }

    greeting(text) {
         return `${text}, My name is ${this.name} `;
    }



}

    class Student extends Person{
        constructor (name,year,studentNumber){
            super(name,year);
            this.studentNumber = studentNumber;
        }
        study(){
            console.log('I am Learning');
        }
        greeting(text) {
            let str = super.greeting(text);
            str += `My number is ${this.studentNumber} `;
            return str;
       }

    }

    class Teacher extends Person {

        constructor (name,year,department){

            super(name,year,department);
            this.department = department;

    }
    teach(){
        console.log('I am Teaching');
    }greeting(text) {
        let str = super.greeting(text);
        str += `My departmen is ${this.department} `;
        return str;
   }

}



// Nesne - Object 

const p1 = new Student('Şara', 1987,120);
const p2 = new Teacher('Biran',1985,'Math');
const p3 = new Person();

p1.study();
p2.teach();



console.log(p1.greeting('Hello'));
console.log(p2.greeting('Good Morning'));

console.log(p1.calculaAge());
console.log(p2.calculaAge());

console.log(p1);
console.log(p2);

