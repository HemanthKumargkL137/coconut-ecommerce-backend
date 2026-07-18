require("dotenv").config();

const app = require("./app");
const sequelize = require("./config/database");

const PORT = process.env.PORT || 5000;

async function startServer() {
  try {
    console.log("🔄 Connecting to MySQL Database...");

    await sequelize.authenticate();

    console.log("✅ Database Connected Successfully!");

    app.listen(PORT, () => {
      // console.log(`🚀 Server is running on http://localhost:${PORT}`);
      console.log(`🚀 Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Unable to connect to the database.");
    console.error(error.message);

    process.exit(1);
  }
}

startServer();