/**
 * Created by Kristian Nielsen on 21-04-2018.
 */


function AccountSummary(personId, balance, salary, score){
    if(!salary || salary < 0 || !personId || personId < 1 || !salary || salary < 0 || !score || score > 3 || score < 1){
        throw new Error(`Invalid Arguments (${Array.from(arguments).join(', ')})`)
    }

    this.personId = personId;
    this.balance = balance;
    this.salary = salary;
    this.score = score;
}

AccountSummary.prototype.print = function(){
    console.log(`${this.personId} | balance: ${this.balance}, salary: ${this.salary}, score: ${this.score}`);
};

module.exports = AccountSummary;