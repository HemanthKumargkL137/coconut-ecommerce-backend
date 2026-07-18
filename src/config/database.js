const path = require("path");
const { Sequelize } = require("sequelize");

require("dotenv").config({
  path: path.resolve(__dirname, "../../.env"),
  quiet: true,
});

function createSequelize() {
  if (process.env.DATABASE_URL) {
    return new Sequelize(process.env.DATABASE_URL, {
      dialect: "mysql",
      logging: false,
      dialectOptions: {
        connectTimeout: 60000,
      },
    });
  }

  const database = process.env.DB_NAME || process.env.MYSQLDATABASE;
  const username = process.env.DB_USER || process.env.MYSQLUSER;
  const password = process.env.DB_PASSWORD || process.env.MYSQLPASSWORD;
  const host = process.env.DB_HOST || process.env.MYSQLHOST;
  const port = process.env.DB_PORT || process.env.MYSQLPORT || 3306;

  const missing = [];
  if (!database) missing.push("DB_NAME");
  if (!username) missing.push("DB_USER");
  if (!host) missing.push("DB_HOST");

  if (missing.length > 0) {
    throw new Error(
      `Missing database environment variables: ${missing.join(", ")}`
    );
  }

  return new Sequelize(database, username, password || "", {
    host,
    port: Number(port),
    dialect: "mysql",
    logging: false,
    dialectOptions: {
      connectTimeout: 60000,
    },
  });
}

module.exports = createSequelize();
