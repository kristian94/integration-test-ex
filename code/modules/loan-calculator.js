/**
 * Created by Kristian Nielsen on 21-04-2018.
 */
const Person = require('../data-classes/person');
const AccountSummary = require('../data-classes/account-summary');
const LoanOffer = require('../data-classes/loan-offer');

module.exports = {
    calculateLoan: function(person, accountSummary){
        if(!person || !person instanceof Person || !accountSummary || !accountSummary instanceof AccountSummary){
            throw new Error(`Invalid Arguments (${Array.from(arguments).join(', ')})`)
        }

        const c = (f) => f(person, accountSummary);

        const amount = c(calcAmount);
        const interest = c(calcInterest);
        const period = c(calcPeriod);

        return new LoanOffer(amount, interest, period);
    }
};

function calcAmount(person, accountSummary){
    const workYearsEst = Math.max(75 - person.age, 10);
    const yearlySalary = accountSummary.salary * 12;
    const multiplier =
        accountSummary.score == 1 ? 1 :
            accountSummary.score == 2 ? 1.05 :
                1.15;


    return workYearsEst * yearlySalary / 3 * multiplier;
}

function calcInterest(person, accountSummary){
    let interest = accountSummary.score == 1 ? 10 :
        accountSummary.score == 2 ? 6 : 2;

    if(person.age > 50) interest += 2;

    return interest;
}

function calcPeriod(person, accountSummary){
    let p = 65 - person.age;

    return Math.max(p, 10);
}