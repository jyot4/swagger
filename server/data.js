import express from 'express'
import swaggerJSDoc from 'swagger-jsdoc'
import  swaggerUi from 'swagger-ui-express'

const app = express()
app.use(express.json())



const student = [
    {id: "43",  name : "priya"},
    {id: "43",  name : "sween"},
    {id: "43",  name : "ujwal"}

]

//..............swagger option...............//
 
const option = {
    swaggerDefinition:{
        openapi:"3.0.0",

        info:{
           title: "my Data",
           version : "1.0.0"
        },
        servers:[
            {
                url : "http://localhost:4054/"
            }
        ]
    } ,

        apis:[
            "./data.js"
        ]
            
        
    
}

/// ......................... creating swagger...............//

const swaggerspec = swaggerJSDoc(option)
app.use( "/document" , swaggerUi.serve, swaggerUi.setup(swaggerspec))



//...............................schema..................

/**
 *  @swagger
 *    /content:
 *      get:
 *        summary : data of student
 *        description : this api return book information.
 *        responses:
 *               200:
 *                description : sucessfull done.
 *                content:
 *                    application/json:
 *                       schema:
 *                         type: array
 *                         items:
 *                            type : object
 *                            properties:
 *                              id:
 *                                type: string
 *                              name:
 *                                type: string            
 * 
 *        
 */


app.get( '/content' , (req,res)=>{
    res.status(200).json(student)
})

app.listen(4054,()=>{
console.log('app is listening')
})