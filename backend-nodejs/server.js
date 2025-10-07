import express from "express";
import cors from "cors";
import 'dotenv/config';
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoutes.js";






// App config 
const app = express();

const port = process.env.PORT || 4000;

// Middlewares 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
connectDB();
connectCloudinary();

// API endpoints 

app.get('/', (req, res) => {
    res.send("API is running...");
})



app.use('/api/user', userRouter);

app.use('/api/product', productRouter);



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});