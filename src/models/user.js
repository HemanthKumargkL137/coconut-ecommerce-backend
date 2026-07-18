const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    phone: {
      type: DataTypes.STRING,
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    role: {
      type: DataTypes.ENUM("USER", "ADMIN"),
      defaultValue: "USER",
    },
  },
  {
    tableName: "users",
    timestamps: true,
  }
);

module.exports = User;



// | id | firstName | lastName | email                                         | role  |
// | -- | --------- | -------- | --------------------------------------------- | ----- |
// | 1  | Hemanth   | Kumar    | [hemanth@gmail.com](mailto:hemanth@gmail.com) | USER  |
// | 2  | Rahul     | Sharma   | [rahul@gmail.com](mailto:rahul@gmail.com)     | USER  |
// | 3  | Admin     | Kumar    | [admin@gmail.com](mailto:admin@gmail.com)     | ADMIN |
