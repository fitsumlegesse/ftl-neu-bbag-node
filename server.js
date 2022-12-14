
import express from 'express'
import { readdirSync } from 'fs'
import mongoose from 'mongoose'
import cors from "cors"
const morgan = require("morgan")

//Configuration values are loaded from the .env file 
    require("dotenv").config()


    const app = express()

//Establishing a database connection to atlas db
    // mongoose
    //   .connect(process.env.DATABASE, {
    //       useNewUrlParser: true,
    //       useUnifiedTopology: true
    //   })
    //   .then(() => console.log("DB connected"))
    //   .catch((err) => console.log("DB Error => ", err));



//Middleware to resolve cors error. eg. frontend to backend
    app.use(cors())
    app.use(express.json())
      //Middleware to print accessed routes 
    app.use(morgan("dev"))

  

    readdirSync("./routes").map((r)=>
        app.use("/api",require(`./routes/${r}`))
    )


//Utlizes the port number specified in the .env file and listens on that port 
    const port = process.env.PORT || 8000
    app.listen(port, console.log(`port running on ${port}`)) 
