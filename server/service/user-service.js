import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";

import UserModel from "../models/user-model.js";
import mailService from "./mail-service.js";
import tokenService from "./token-service.js";

class UserService {
  async registration(email, password) {
    const candidate = await UserModel.findOne({ email });
    if (candidate) {
      throw new Error(`User with email ${email} already exists`);
    }

    const hashPassword = await bcrypt.hash(password, 3);
    const activationLink = uuid();
    const user = await UserModel.create({
      email,
      password: hashPassword,
      activationLink,
    });

    await mailService.sendActivationLink(email, activationLink);

    const { _id: id, isActivated } = user;

    const tokens = tokenService.generateTokens({ id, email, isActivated });
    await tokenService.saveToken(id, tokens.refreshToken);

    return {
      ...tokens,
      user: {
        id,
        email,
        isActivated,
      },
    };
  }
}

export default new UserService();
