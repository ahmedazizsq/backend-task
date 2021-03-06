import mongoose from "mongoose";
import { DB_URL, options } from "./config/mongoose";

const handleConnection = () => {
  console.log("Mongoose opened connection.");
};

const handleDisconnection = () => {
  console.log("Mongoose default connection is disconnected.");
};

const handleError = (error) => {
  console.log("Mongoose default connection has occured error: ", error);
};

const handleProcessTermination = () => {
  console.log(
    termination(
      "Mongoose default connection is disconnected due to application termination"
    )
  );
  process.exit(0);
};

export default () => {
  try {
    console.log("database is trying to connect...");
    mongoose.connect(DB_URL, options).catch((err) => {
      console.log("Mongoose default connection has occured error: ", error);
    });
  } catch (databaseError) {
    handleError(databaseError);
  }

    mongoose.connection.on("connected", handleConnection);
    mongoose.connection.on("error", handleError);
    mongoose.connection.on("disconnected", handleDisconnection);

    process.on(
      "SIGINT",
      mongoose.connection.close.bind(null, handleProcessTermination)
    );
};
