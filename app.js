const express = require("express");
const path = require("path");

// Routes
//const recipeRoutes = require("./routes/recipes");

const app = express();

app.use(express.json({ limit: "10mb", extended: true }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, responseType, Authorization, SoftwareLocation"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "POST, GET, PUT, PATCH, DELETE, OPTIONS"
  );
  next();
});

// Für Produktion
app.use(
  "/backend/uploads/images",
  express.static(path.join("backend", "uploads", "images"))
);

// Für Entwicklung
app.use("/uploads/images", express.static(path.join("uploads", "images")));

// app.use("/api/recipes", recipeRoutes);

module.exports = app;
