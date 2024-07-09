




































const { DataTypes } = require("sequelize");
const config = require("../../config");
const sequelize = config.DATABASE;

const Alive = sequelize.define("alive", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
    defaultValue: "phoenix_md",
    unique: true,
  },
  text: {
    type: DataTypes.TEXT,
    defaultValue: `_Hy Mr \n\n i αм alive now how ¢αη ι нєℓρ уσυ* \n\n_If any query : t.me/king_md_support_\n\n\n_type prefix alive & your message to update alive message_ \n*Eg: _.alive &Your_Alive_Message_*`,
  },
  get: {
    type: DataTypes.STRING,
    defaultValue: "you didn't set alive message yet",
  },
  url: {
    type: DataTypes.STRING,
    defaultValue: "",
  },
  image: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  video: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Alive;
