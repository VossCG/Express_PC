const Relation = require("./Relation")

class Product {
    /**
     * 
     * @param {String} id 
     * @param {String} name 
     * @param {Number} points 
     * @param {String} category 
     * @param {String} imageURL 
     * @param {Number} stock 
     * @param {String} expiredDate 
     * @param {Boolean} isOnline 
     * @param {Boolean} isAvailable 
     * @param {Array<Relation>} exchangeRelations 
     */
    constructor(id, name, points, category, imageURL, stock, expiredDate, isOnline, isAvailable, exchangeRelations) {
        this.id = id
        this.name = name
        this.stock = stock
        this.points = points
        this.category = category
        this.imageURL = imageURL
        this.isOnline = isOnline
        this.isAvailable = isAvailable
        this.expiredDate = expiredDate
        this.exchangeRelations = exchangeRelations
    }
}

module.exports = Product