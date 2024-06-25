const mongoose = require("mongoose");
const db = mongoose.connection;

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  
  console.log("Successlly Connected to Database...!");
}

// module.exports = db;