class User{
    
    constructor(name='Anonymous', age='20'){
        this.name = name;
        this.age = age;
    }
    
    getName(){
        return this.name;
    }

    getAge(){
        return this.age;
    }
}