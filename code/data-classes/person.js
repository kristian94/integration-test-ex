/**
 * Created by Kristian Nielsen on 21-04-2018.
 */
function Person(id, name, age){
    if(!id || !name || name == '' || age < 0){
        throw new Error(`Invalid Arguments (${Array.from(arguments).join(', ')})`)
    }

    this.id = id;
    this.name = name;
    this.age = age;
}

Person.prototype.print = function(){
    const _age = this.age == 1 ? `${this.age} year` : `${this.age} years`;
    console.log(`${this.id} | ${this.name}, ${_age}`);
};

module.exports = Person;