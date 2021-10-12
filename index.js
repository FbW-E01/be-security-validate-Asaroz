import express from "express"
import { validationResult } from "express-validator"
import birdValidator  from "./validators/birdValidator.js"


const server = express()
server.use(express.json())
server.use((req,res,next) => {
    console.log(`${req.method} ${req.path}`)
    next();
})
const birdArray=[]
server.post(
    "/birds",
    birdValidator,
    (req, res) =>{
        console.log(req.body)
        const result = validationResult(req);
        if (!result.isEmpty()) {
            res.status(400);
            res.json({
                errors: result.errors.map(e => e.msg)
            });
            return;
        }
        res.send("all good!")
        birdArray.push(req.body)
    }
    
    
)
server.get(
    "/birds",
    (req,res) =>{
        res.send(birdArray)
    }
)


server.listen(666,()=>{
    console.log("Listening on http://localhost:666")
})