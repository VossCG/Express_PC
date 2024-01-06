const express = require("express");
const router = express.Router()

router.get('/', async (req, res) => {
    /* 	#swagger.tags = ['User']
        #swagger.description = 'Endpoint to sign in a specific user'*/

    /*  #swagger.responses[200] = {
          schema:
                {
                    "name":"Voss",
                    "age":20
                }
        
        } 
    */
    res.status(200).json({
        "name": 'Voss',
        "age": 20
    })
})

router.post('/', async (req, res) => {
    /* #swagger.tags = ['User']
       #swagger.description = 'new User' 
    */

    /* #swagger.responses[200] = {
        schema: {
            "message":"success"
          }
        } 
    */

    res.status(200).json({
        message: "success",
        body: req.body
    })
})

module.exports = router