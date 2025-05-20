const { model } = require("mongoose");

const { userSchema } = require("../schemas/UserSchema.js");

const UserModel = new model("user", userSchema);

module.exports = {UserModel};