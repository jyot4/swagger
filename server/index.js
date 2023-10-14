import express from 'express'
import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'


const app = express()
app.use(express.json())



const cars = [
    
       { id:"1", model: "tata"},
       { id:"2", model: "mahendra"},
       { id:"3", model: "honda"}
    
]


//................swagger option ............///



const option = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: "Swagger api",
            version: "1.0.0"
        },
        servers: [

            {
                url: "http://localhost:5000/"
            }
        ]
    },
    apis: [
        "./index.js"
    ]
};


//......................creating swager............//
const swaggerSpec = swaggerJSDoc(option)
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))







//...............................create a sepreate schema.............//

/**
 * @swagger
 *   components:
 *     schemas:
 *       cars:
 *        type: object
 *        properties:
 *          id:
 *           type: string
 *          model:
 *           type: string
 */


//....................swagger schema ...............//

/**
 * @swagger
 *   /data:
 *       get:
 *         summary : data of anything
 *         description : this api return book information.
 *         responses :
 *           200: 
 *             description : Successfull response with book data. 
 *             content :
 *                  application/json :
 *                    schema:
 *                      type: array
 *                      items:
 *                        $ref: '#/components/schemas/cars'  
 * 
 * 
 */



app.get ("/data", (req,res)=>{
    res.status(200).json(cars)
    console.log("hello")
})
app.listen(5000, () => {
    console.log('server is running')
})