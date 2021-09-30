import mongoose from 'mongoose'

const productSchema = mongoose.Schema({
    id: String,
    name: String,
    description: String
})

export default mongoose.model('products', productSchema)