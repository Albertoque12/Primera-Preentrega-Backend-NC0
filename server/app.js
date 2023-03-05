import express from 'express'
import cRouter from '../routes/cartRoute.js'
import pRouter from '../routes/productRoute.js'
const app = express()
const PORT = 8080
app.use(express.json());
app.use(express.urlencoded( {extended: true} ));




app.use("/api/cart", cRouter)
app.use("/api/products", pRouter)




app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`);
})