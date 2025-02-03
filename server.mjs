
// DEPENDENCIES
import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import nominationRouter from "./routes/nominationRouter.mjs"
import nomination_statusRouter from "./routes/nomination_statusRouter.mjs"
import nomination_commentRouter from "./routes/nomination_commentRouter.mjs"

import nominationData from "./data/nominationData.mjs";
import nomination_statusData from "./data/nomination_statusData.mjs";
import nomination_commentData from "./data/nomination_commentData.mjs";

import nominations from "./models/nominations.mjs";
import nomination_status from "./models/nomination_status.mjs";
import nomination_comments from "./models/nomination_comments.mjs";
dotenv.config();

const port = 3001;
const app = express();

await mongoose.connect(process.env.ATLAS_URI);

//===================================================

let dataset = 'nominationData';
try {
  const result = await nominations.insertMany(nominationData);
  console.log(`${result.length} documents ${dataset} were inserted`);
} catch (error) {
  console.error('Error inserting documents ${dataset}:', error);
}

try {
    const result = await nomination_status.insertMany(nomination_statusData);
    console.log(`${result.length} documents were inserted`);
} catch (error) {
    console.error('Error inserting documents:', error);
}

try {
  const result = await nomination_comments.insertMany(nomination_commentData);
  console.log(`${result.length} documents were inserted`);
} catch (error) {
  console.error('Error inserting documents:', error);
}
// routers
// const posts = require("./routes/posts");
// const comments = require("./routes/comments");
// import error from "utilities/error.mjs";

// required for POST and PUT requests; qs library
// app.use(bodyParser.urlencoded({extended:true}));
// app.use(bodyParser.json({extended:true}));
app.use(express.urlencoded({extended:true}));
app.use(express.json({extended:true}));

//===================================================
app.use("/nominations", nominationRouter);
app.use("/status", nomination_statusRouter);
app.use("/comments", nomination_commentRouter);

// app.use("/api/posts", posts);
// app.use("/api/comments", comments);

// 404 Middleware
app.use((req, res, next) => {
  next(error(404, "Resource Not Found"));
});

// more general error code middleware(?)
app.use((err, req, res, next) => {
  res.status(err.status || 500);
//  res.json({ error: err.message })
});

app.listen(port, () => {
  console.log(`Server listening on port: ${port}.`);
});