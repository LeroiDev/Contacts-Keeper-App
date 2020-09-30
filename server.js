const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send({
    msg: "Welcome to the contact keeper api",
  });
});

// Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/contacts", require("./routes/contacts"));
app.use("/api/auth", require("./routes/auth"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server started on ${PORT}`);
});
