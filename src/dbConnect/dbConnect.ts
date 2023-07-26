import mongoose from "mongoose";

// username : nextjsauthentication
// password : aklnOVkUIxl6DisH
export const dbConnect = async () => {
  try {
    mongoose.connect(process.env.MONGO_DB_URL!);
    console.log("mongoose connected");
  } catch (error) {
    console.log(error);
  }
};
