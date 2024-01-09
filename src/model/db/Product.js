const Relation = require("./Relation")

class Product {
    /**
     * 
     * @param {String} name 
     * @param {String} category 
     * @param {String} imageURL 
     * @param {Number} stock 
     * @param {String} expiredDate 
     * @param {Boolean} isOnline 
     * @param {Boolean} isAvailable 
     * @param {String} pointValue
     * @param {String} pointRequired
     */
    constructor(name, category, imageURL, stock, expiredDate, pointValue, pointRequired, isOnline, isAvailable) {
        this.name = name
        this.stock = stock
        this.category = category
        this.imageURL = imageURL
        this.isOnline = isOnline
        this.isAvailable = isAvailable
        this.expiredDate = expiredDate
        this.pointValue = pointValue
        this.pointRequired = pointRequired
    }
}

module.exports = Product