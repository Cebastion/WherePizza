import { Schema } from "mongoose";

export const OrderSchema = new Schema({
    _id:  String, 
    user_id: String,
    name: String,
    img: String,
    ingredients: String, 
    price: Number
})