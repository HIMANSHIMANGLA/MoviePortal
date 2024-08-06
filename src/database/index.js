import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    await mongoose.connect(
      // "mongodb+srv://himanshimangla9:<9CHmrkX3V6NC9jEK>@cluster0.yvya5v0.mongodb.net/"
      "mongodb+srv://himanshimangla9:9CHmrkX3V6NC9jEK@cluster0.yvya5v0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/"
    );

    console.log("mongodb is connected");
  } catch (e) {
    console.log(e);
  }
};

export default connectToDB;
