const express = require('express');
const dotnev = require('dotenv');
const cors = require('cors');
const contactRoutes = require('./routes/contact');


dotnev.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/contact', contactRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});