import mongoose from "mongoose";

mongoose.connect(process.env.DB_URI)

mongoose.connection.once('open', () => { console.log('connected to DB'); })
mongoose.connection.on('error', () => { console.error('DB connected failure'); })