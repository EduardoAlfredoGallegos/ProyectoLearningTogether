const express = require('express');
const cors = require('cors');
require('dotenv').config();

//Servidor express
const app = express();
app.use(cors());
app.use(express.static('front'))
app.use(express.json());
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});

app.use("/api/auth", require("./routes/auth.routes"));
