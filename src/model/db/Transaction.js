class Transaction {
    /**
     * 
     * @param {String} machineID 
     * @param {String} productID 
     * @param {String} type 
     * @param {Number} amount 
     * @param {String} timestamp 
     */
    constructor(machineID, productID, type, amount, timestamp) {
        this.machineID = machineID;
        this.productID = productID;
        this.type = type;
        this.amount = amount;
        this.timestamp = timestamp;
    }
}

module.exports = Transaction
