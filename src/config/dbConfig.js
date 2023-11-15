// config/dbConnect.tsx

import { connect, connection } from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}
function dbConnect() {
  if (connection.readyState < 1) {
    try {
      connect(MONGODB_URI);
      console.log("Database⚡:: ✅ Connected !!");
    } catch (error) {
      console.log("Database⚡:: ❌ Failed to connect !");
    }
  } else {
    return;
  }
}

export default dbConnect;
