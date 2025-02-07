import { DataTypes } from "sequelize";
import sequelize from "../config/dbconfig.js";

const Recipe = sequelize.define('Recipe', {
    recipe_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    recipe_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    directions: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    desc_of_taste: {
      type: DataTypes.STRING(1000),
      allowNull: true,
    },
    short_desc: {
      type: DataTypes.STRING(250),
      allowNull: true,
    },
    image: {
      type: DataTypes.BLOB,
      allowNull: true,
    },
    skill_level: {
      type: DataTypes.ENUM('Easy', 'Medium', 'Hard'),
      allowNull: false,
    },
    time_to_make: {
      type: DataTypes.STRING(15),
      allowNull: true,
    },
  }, {
    tableName: 'recipes',
    timestamps: false,
  });


  export default Recipe;