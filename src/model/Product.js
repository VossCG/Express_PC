import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  cost: {
    type: Number,
    min: 0,
    required: true,
  },
  inventory: {
    type: Number,
    min: 0,
    required: true,
  },
  category: {
    type: String,
    enum: ["food", "toy", "book", "other"],
    required: true
  },
  expiredDate: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    trim: true,
    required: true
  },
});

productSchema.pre('save', () => {
  console.log('before save action');
})

productSchema.post('save',()=>{
  console.log('after save action');
})

const Product = mongoose.model('Product', productSchema);

export default Product;
