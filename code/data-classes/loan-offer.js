/**
 * Created by Kristian Nielsen on 21-04-2018.
 */
function LoanOffer(amount, interest, period){
    if(!amount || !interest || !period || amount < 0 || interest < 0 || period < 0){
        throw new Error(`Invalid Arguments (${Array.from(arguments).join(', ')})`)
    }

    this.amount = amount;
    this.interest = interest;
    this.period = period;
}

LoanOffer.prototype.print = function(){
    console.log(`Offer | amount: ${this.amount}, interest: ${this.interest}, period: ${this.period}`)
}

module.exports = LoanOffer;