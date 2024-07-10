import { AxiosResponse } from "axios";

import axiosIstance from "./axiosIstance";
import { IAuthResponse } from "#types/responses/AuthResponse";

const authAPI = {
  login: async (
    email: string,
    password: string
  ): Promise<AxiosResponse<IAuthResponse>> => {
    return await axiosIstance.post<IAuthResponse>("/login", {
      email,
      password,
    });
  },

  registration: async (
    email: string,
    password: string
  ): Promise<AxiosResponse<IAuthResponse>> => {
    return await axiosIstance.post<IAuthResponse>("/registration", {
      email,
      password,
    });
  },

  logout: async (): Promise<void> => {
    return await axiosIstance.post("/logout");
  },
};

export default authAPI;
