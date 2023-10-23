const express = require('express');
const app = express();
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const destinationRoutes = require('./routes/destinationRoutes');
dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// ... middlewares and other setup

// Routes usage
app.use('/api/users', userRoutes);
app.use('/api/destinations', destinationRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});