import { UserSchema } from "../schema/user.schema";
import mongoose from 'mongoose'

export const UserModule = mongoose.model('users', UserSchema)