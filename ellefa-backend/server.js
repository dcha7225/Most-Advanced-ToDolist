require("dotenv").config(); 
const cors = require('cors');
const express = require("express");
const app = express();

app.use(cors({
  origin: '*'
}));

app.use(express.json()); // parse json bodies in the request object

app.use("/posts", require("./routes/postRoutes"));

app.use((err, req, res, next) => { //error handler
  console.log(err.stack);
  console.log(err.name);
  console.log(err.code);

  res.status(500).json({
    message: "Something went wrong",
  });
});

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
