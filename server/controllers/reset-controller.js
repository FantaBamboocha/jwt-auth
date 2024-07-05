import UserModel from "../models/user-model.js";
import TokenModel from "../models/token-model.js";

const resetController = async (_, res) => {
  try {
    await UserModel.deleteMany({});
    await TokenModel.deleteMany({});

    res.status(200).send("Database has been reset.");
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while resetting the database.");
  }
};

export default resetController;
