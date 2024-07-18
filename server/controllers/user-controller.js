import dotenv from "dotenv";
import userService from "../service/user-service.js";

dotenv.config();

class UserController {
  async registration(req, res) {
    try {
      const { firstName, email, password } = req.body;
      const userData = await userService.registration(
        firstName,
        email,
        password
      );

      // res.cookie("refreshToken", userData.refreshToken, {
      //   maxAge: 30 * 24 * 60 * 60 * 1000,
      //   httpOnly: true,
      //   secure: true,
      //   sameSite: "None",
      // });
      return res.json(userData);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const userData = await userService.login(email, password);

      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: false,
        secure: true,
        sameSite: "None",
      });

      return res.json(userData);
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  }

  async logout(req, res) {
    try {
      const { refreshToken } = req.cookies;
      const token = await userService.logout(refreshToken);

      res.clearCookie("refreshToken");

      return res.status(200).json(token);
    } catch (error) {}
  }

  async activate(req, res) {
    try {
      const activationLink = req.params.link;

      await userService.activate(activationLink);

      return res.redirect(process.env.CLIENT_URL);
    } catch (error) {
      console.log(error);
    }
  }

  async refresh(req, res) {
    try {
      const { refreshToken } = req.cookies;
      const userData = await userService.refresh(refreshToken);

      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: false,
        secure: true,
        sameSite: "None",
      });

      return res.json(userData);
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  }

  async getUsers(req, res) {
    try {
      const users = await userService.getUsers();
      return res.json(users);
    } catch (error) {}
  }
}

export default new UserController();
