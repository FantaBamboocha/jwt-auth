import tokenService from "../service/token-service.js";

const authMiddleware = (req, res, next) => {
  const authorizationHeader = req.headers.authorization;

  if (!authorizationHeader) {
    return res.status(401).json({ message: "Authorization header is missing" });
  }

  const [scheme, token] = authorizationHeader.split(" ");
  if (scheme !== "Bearer" || !token) {
    return res
      .status(401)
      .json({ message: "Invalid Authorization header format" });
  }

  try {
    const userData = tokenService.validateAccessToken(token);

    if (!userData) {
      return res.status(401).json({ message: "Invalid token" });
    }

    // req.user = userData;

    next();
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export default authMiddleware;
