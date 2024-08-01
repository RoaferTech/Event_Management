const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

dotenv.config();
const app = express();


// connect to data base
connectDB();

//all  middlewares
app.use(cors());
app.use(express.json({ extended: false }));

//all routers
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/events',require('./routes/eventRoutes'));

const PORT = process.env.PORT || 5000;
// start the server
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})