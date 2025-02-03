// chatGPT
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

async function dropAllCollections() {
  try {
    await mongoose.connect(process.env.ATLAS_URI);

    const db = mongoose.connection.db;
    const collections = await db.listCollections().toArray();

    for (let collection of collections) {
      await db.collection(collection.name).drop();
      console.log(`Dropped collection: ${collection.name} ✅`);
    }

    console.log("All collections dropped! 🚀");
    mongoose.connection.close();
  } catch (error) {
    console.error("Error dropping collections ❌", error);
    mongoose.connection.close();
  }
}

dropAllCollections();
