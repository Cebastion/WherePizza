export const OrderSchema = new Document({
    _id:  String, 
    user_id: String,
    name: String,
    img: String,
    ingredients: String, 
    price: Number
})