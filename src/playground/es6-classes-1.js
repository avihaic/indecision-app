class Person {
    constructor (name = 'anonymous',age = 0){
        this.name = name;
        this.age = age;
    }
    getgretting(){
        return `hi. i am ${this.name}`;
    }
    getdescription(){
        return `${this.name} is ${this.age} year(s) old`;
    }
}

class Student extends Person {
    constructor(name,age,major){
        super(name,age);
        this.major = major;
    }
    hasmajor(){
        return !!this.major;
    }
    getdescription(){
       let description = super.getdescription();
       if(this.major){
           description += ` ${this.major}`;
       }
       return description;  
    }
}

class Traveler extends Person {
    constructor(name,age,home){
        super(name,age);
        this.home = home;
    }
    getgretting(){
        let gretting = super.getgretting();
        if(this.home){
            gretting += ` I am visiting from ${this.home}`
        }
        return gretting;
    }
}


const me = new Traveler('avihai cohen',38,'beer sheva');
console.log(me.getgretting());

const other = new Traveler();
console.log(other.getgretting());







