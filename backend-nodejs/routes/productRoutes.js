import express from 'express';
import { listProduct, addProduct, deleteProduct, singleProduct } from "../controllers/productController.js";
import upLoad from '../middleware/multer.js';
import adminAth from '../middleware/adminAth.js';


const productRouter = express.Router();

productRouter.post('/add', adminAth, upLoad.fields([{ name: "image1", maxCount: 1 }, { name: "image2", maxCount: 1 },
{ name: "image3", maxCount: 1 }, { name: "image4", maxCount: 1 }]), addProduct);
productRouter.get('/list', listProduct);
productRouter.get('/single/:id', singleProduct);
productRouter.delete('/delete/:id', adminAth, deleteProduct);

export default productRouter;