import dotenv from "dotenv";
import userService from "../service/user-service.js";

dotenv.config();

class UserController {
  async registration(req, res, next) {
    try {
      const { email, password } = req.body;
      const userData = await userService.registration(email, password);

      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      return res.json(userData);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async login(req, res, next) {
    try {
    } catch (error) {}
  }

  async logout(req, res, next) {
    try {
    } catch (error) {}
  }

  async activate(req, res, next) {
    try {
      const activationLink = req.params.link;

      await userService.activate(activationLink);

      return res.redirect(process.env.CLIENT_URL);
    } catch (error) {
      console.log(error);
    }
  }

  async getUsers(req, res, next) {
    try {
      res.json({ users: ["lol", "kek"] });
    } catch (error) {}
  }
}

export default new UserController();
