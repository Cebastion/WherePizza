import { OrderSchema } from "../schema/order.schema"
import mongoose from 'mongoose'

export const OrderModule = mongoose.module('historyOrder', OrderSchema)