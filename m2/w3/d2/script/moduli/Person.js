export class Person {
    constructor(_name,_age){
        this.name = _name;
        this.age = _age;
    }

    static comparAge(p1,p2){
        return p1.age > p2.age ? 1 : -1;//se p1.age == p2.age ritorna -1
    }

    static comparAgeText(p1,p2){
        if(Person.comparAge(p1,p2) === 1){
            return `${p1.name} è più vecchio di ${p2.name}`
        }else if(Person.comparAge(p1,p2) === -1 && p1.age != p2.age){
            return `${p2.name} è più vecchio di ${p1.name}`
        }else{
            return `${p1.name} e ${p2.name} hanno la stessa eta.`
        }
    }
}