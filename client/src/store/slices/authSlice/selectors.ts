import { RootState } from "@store/store";

export const isAuthSelector = (state: RootState) => state.auth.isAuth;

export const userSelector = (state: RootState) => state.auth.user;

export const isLoadingSelector = (state: RootState) => state.auth.isLoading;
