import { UserSchema } from "../schema/user.schema";

export const UserModule = mongoose.model('users', UserSchema)