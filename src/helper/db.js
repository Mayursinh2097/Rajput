import mongoose from "mongoose";
export const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_DB_URL, {
      dbName: "samaj",
    });
    console.log("db connected...");
    console.log(connection);
  } catch (error) {
    console.log("failed to connect with Database");
    console.log(error);
  }
};
