/**
 * Created by Kristian Nielsen on 21-04-2018.
 */
const Person = require('./data-classes/person');
const AccountSummary = require('./data-classes/account-summary');
const LoanOffer = require('./data-classes/loan-offer');

const AccountInfoBase = require('./modules/account-info-base');
const PersonBase = require('./modules/person-base');
const LoanCalculator = require('./modules/loan-calculator');

const personBase = new PersonBase({
    people: [
        new Person(1, 'Kristian', 23),
        new Person(2, 'Magnus', 27),
        new Person(3, 'Kristoffer', 23),
        new Person(4, 'Borum', 23)
    ]
});

const accountBase = new AccountInfoBase({
    accountSummaries: [
        new AccountSummary(1, 25000, 10000, 2),
        new AccountSummary(2, 15000, 7000, 2),
        new AccountSummary(3, 20000, 8500, 1),
        new AccountSummary(4, 22500, 12750, 3),
    ]
});

// accountBase.print();
// accountBase.get(1).print()

const offer = LoanCalculator.calculateLoan(personBase.get(1), accountBase.get(1));

offer.print();


// personBase.print()
// accountBase.print()

