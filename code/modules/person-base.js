/**
 * Created by Kristian Nielsen on 21-04-2018.
 */

const Person = require('../data-classes/person');


function PersonBase(options = {}){
    this.people = [];
    if(options.people){
        options.people.forEach(p => this.add(p))
    }
}

PersonBase.prototype.add = function(person){
    if(!person instanceof Person){
        throw new Error('Invalid Argument - not instance of Person')
    }

    if(this.containsId(person.id)){
        throw new Error(`Invalid Argument (.id: ${person.id}), person with that id already exists`)
    }
    this.people.push(person);
};

PersonBase.prototype.get = function(id){
    let person = null;
    this.people.forEach(p => {
        if(p.id == id) person = p;
    });
    return person;
};

PersonBase.prototype.containsId = function(id){
    return this.people.reduce((acc, curr)=>{
        if(acc == true || curr.id == id) return true;
    }, false)
};

PersonBase.prototype.print = function(){
    console.log('People in PersonBase (ids): ' + this.people.map(p => p.id).join(', '))
    console.log('Details:')
    this.people.forEach(p => p.print())
};

PersonBase.prototype.getNextId = function(){
    if(this.people.length == 0){
        return 1;
    }

    return this.people.reduce((acc, p) => {
        if(p.id > acc){
            return p.id;
        }
    }, 0) + 1;
}

module.exports = PersonBase;