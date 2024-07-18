interface ILinkConfig {
  [key: string]: {
    text: string;
    linkText: string;
    linkHref: string;
  };
}

export const linkConfig: ILinkConfig = {
  "/login": {
    text: "Don't have an account?",
    linkText: "Sign up",
    linkHref: "/registration",
  },
  "/registration": {
    text: "Have an account?",
    linkText: "Log in",
    linkHref: "/login",
  },
};
