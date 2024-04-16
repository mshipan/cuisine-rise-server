const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5001;

const corsConfig = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
  methods: ["GET", "POST", "PATCH", "PUT", "DELETE", "OPTIONS"],
};

// middlewares
app.use(cors(corsConfig));
app.options("", cors(corsConfig));
app.use(express.json());

// basic setup
app.get("/", (req, res) => {
  res.send("Sunwings Restaurent Server is Running.");
});

app.listen(port, () => {
  console.log(`Sunwings Restaurent Server is Running on PORT: ${port}`);
});
