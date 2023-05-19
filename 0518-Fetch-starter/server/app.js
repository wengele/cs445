const express = require('express');
const cors = require('cors');
const productRouter = require('./router/productRouter');
const app = express();

app.use(cors());
app.use(express.json());
app.use('/products', productRouter);

app.listen(300, () => {
  console.log(`shopping listening on port 3000`);
})