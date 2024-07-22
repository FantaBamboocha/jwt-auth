import tokenService from "../service/token-service.js";

const authMiddleware = (req, res, next) => {
  const authorizationHeader = req.headers.authorization;

  if (!authorizationHeader) {
    return res.sendStatus(401).json({ message: "Unauthorized" });
  }

  const accessToken = authorizationHeader.split(" ")[1];

  if (!accessToken) {
    return res.sendStatus(401).json({ message: "Unauthorized" });
  }

  const userData = tokenService.validateAccessToken(accessToken);

  if (!userData) {
    return res.sendStatus(401).json({ message: "Unauthorized" });
  }

  next();
};

export default authMiddleware;
