import { AxiosResponse } from "axios";

import axiosIstance from "./axiosIstance";
import { IUser } from "#types/responses/IUser";

const usersApi = {
  getUsers: async (): Promise<AxiosResponse<IUser[]>> => {
    try {
      return await axiosIstance.get<IUser[]>("/users");
    } catch (err) {
      throw err;
    }
  },
};

export default usersApi;
