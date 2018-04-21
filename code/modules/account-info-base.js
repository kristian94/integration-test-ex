/**
 * Created by Kristian Nielsen on 21-04-2018.
 */
const AccountSummary = require('../data-classes/account-summary');

function AccountInfoBase(options = {}){
    this.accountSummaries = [];
    if(options.accountSummaries){
        options.accountSummaries.forEach(a => {
            this.add(a);
        })
    }
}

AccountInfoBase.prototype.add = function(accountSummary){
    if(!accountSummary instanceof AccountSummary){
        throw new Error('Invalid Argument - not instance of AccountSummary')
    }

    if(this.containsPersonId(accountSummary.personId)){
        throw new Error(`Invalid Argument (.id: ${accountSummary.personId}), person with that id already exists`)
    }
    this.accountSummaries.push(accountSummary);
};

AccountInfoBase.prototype.get = function(personId){
    let accountSummary = null;
    this.accountSummaries.forEach(a => {
        if(a.personId == personId) accountSummary = a;
    });
    return accountSummary;
};

AccountInfoBase.prototype.containsPersonId = function(personId){
    return this.accountSummaries.reduce((acc, curr)=>{
        if(acc == true || curr.personId == personId) return true;
    }, false)
};

AccountInfoBase.prototype.print = function(){
    console.log('Accounts in AccountInfobase (personIds): ' + this.accountSummaries.map(p => p.personId).join(', '))
    console.log('Details:');
    this.accountSummaries.forEach(a => a.print());
};

module.exports = AccountInfoBase