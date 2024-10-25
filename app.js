const express = require('express');
const ejs=require('ejs');
const dotenv=require('dotenv');
const connectDB=require('./app/config/db');
dotenv.config();
const app = express();
connectDB()

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.json());

const HomeRouter=require('./app/router/homeRouter');
app.use(HomeRouter)    
//for api 
const ApiRouter=require('./app/router/apiRoute');
app.use('/api',ApiRouter)
const port = 3004
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});