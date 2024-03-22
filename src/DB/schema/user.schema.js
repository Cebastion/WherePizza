import { Schema } from "mongoose";

export const UserSchema = new Schema({
    _id: String,
    name: String,
    email: String,
    password: String
})