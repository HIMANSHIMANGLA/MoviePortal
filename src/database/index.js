import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://<Username>:<Password>@cluster0.yvya5v0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/"
    );

    console.log("mongodb is connected");
  } catch (e) {
    console.log(e);
  }
};

export default connectToDB;
