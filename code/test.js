/**
 * Created by Kristian Nielsen on 21-04-2018.
 */
const assert = require('assert');

const Person = require('./data-classes/person');
const AccountSummary = require('./data-classes/account-summary');
const LoanOffer = require('./data-classes/loan-offer');

const AccountInfoBase = require('./modules/account-info-base');
const PersonBase = require('./modules/person-base');
const LoanCalculator = require('./modules/loan-calculator');


describe('Integration Test', function() {
    it('Should find out how much a user can loan', function() {

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

        // we retrieve person with id 1
        const person = personBase.get(1);
        assert.equal(true, person instanceof Person);
        assert.equal(person.name, 'Kristian');

        // we get the persons account info
        const accountSummary = accountBase.get(person.id);
        assert.equal(true, accountSummary instanceof AccountSummary, 'account is istance of AccountSummary');

        // get attempt to get a loan offer
        const offer = LoanCalculator.calculateLoan(person, accountSummary);
        assert.equal(true, offer instanceof LoanOffer);

        person.print();
        accountSummary.print();
        offer.print();

    });
});