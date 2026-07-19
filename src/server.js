const path = require("path");

require("dotenv").config({
  path: path.resolve(__dirname, "../.env"),
  quiet: true,
});

const app = require("./app");
const sequelize = require("./config/database");

const PORT = process.env.PORT || 5000;

async function startServer() {
  try {
    console.log("Connecting to MySQL Database...");

    await sequelize.authenticate();

    console.log("Database connected successfully!");

    // The production schema is managed through migrations. Running sync() here
    // tries to recreate existing foreign keys every time the server restarts.

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database.");
    console.error(error.message);

    process.exit(1);
  }
}

startServer();
