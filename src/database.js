import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB)

mongoose.connection.once('open', () => { console.log('connected to DB'); })
mongoose.connection.on('error', () => { console.error('DB connected failure'); })