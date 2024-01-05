import mongoose from "mongoose";
import { ExchangeRelationSchema } from "./ExchangeRelation.js";

export const ProductSchema = new mongoose.Schema({
  id: String,
  name: String,
  points: Number,
  category: String,
  imageUrl: String,
  stock: Number,
  expiredDate: String,
  isOnline: Boolean,
  isAvailable: Boolean,
  exchangeRelations: [ExchangeRelationSchema]
});

export const Product = mongoose.model('Product', ProductSchema);
