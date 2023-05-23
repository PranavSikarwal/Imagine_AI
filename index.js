const path = require("path");
const express = require("express");
require("dotenv").config();
const port = process.env.PORT || 5000;
<<<<<<< HEAD
const viewRoutes = require('./routes/viewRoutes');

=======
>>>>>>> f3eeca88fe7a2cd0c8775f964266d059d0167ec9

const app = express();

//EJS AS RENDER ENGINE
app.set('view engine', 'ejs');
app.set('views','views'); //look for views in views folder

//ENABLING BODY PARSER:
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ERROR HANDLING MIDDLEWARE
<<<<<<< HEAD
app.use((_err, _req, res, _next) => {
console.log(_err);
res.status(500).json({ error: 'Internal Server Error' })});


=======
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ error: "Internal Server Error" });
});
>>>>>>> f3eeca88fe7a2cd0c8775f964266d059d0167ec9

//STATIC FOLDER:
app.use(express.static(path.join(__dirname, "public")));

<<<<<<< HEAD
//View Routes taken from viewRoutes.js
app.use(viewRoutes);
=======
app.use("/openai", require("./routes/openaiRoutes"));
>>>>>>> f3eeca88fe7a2cd0c8775f964266d059d0167ec9

app.listen(process.env.PORT, () =>
  console.log(`Server started on port ${port}`)
);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "public/error.html"));
});
