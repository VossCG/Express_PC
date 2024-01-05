const Stock = require("./Stock");
const Transaction = require("./Transaction");

class Machine {
    /**
     * 
     * @param {String} branch 
     * @param {String} date 
     * @param {Number} machine 
     * @param {String} store 
     * @param {Number} amount 
     * @param {Number} eye 
     * @param {Array<Transaction>} transactions 
     * @param {Array<Stock>} currentStock 
     */
    constructor(branch, date, machine, store, amount, eye, transactions, currentStock) {
        this.branch = branch;
        this.date = date;
        this.machine = machine;
        this.store = store;
        this.amount = amount;
        this.eye = eye;
        this.transactions = transactions
        this.currentStock = currentStock
    }
}


module.exports = Machine