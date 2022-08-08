import mongoose from 'mongoose';
console.log(process.env.MONGO_URI)
const connectMongo = async () => mongoose.connect("mongodb://localhost:27018/");

export default connectMongo;