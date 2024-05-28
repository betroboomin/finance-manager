import jwt from "jsonwebtoken";
import UserModel from "./models/user.model.js";

export const protectRoute = async (req, res, next) => {
  try {
    console.log({ header: req.headers.authorisation });
    const token = req.headers.authorisation.split(" ")[1];

    if (!token) {
      return res.status(404).json({ message: "no token" });
    }

    const validateToken = await jwt.verify(token, "RANDOM_TOKEN");
    if (!validateToken) {
      return res.status(401).json({ message: "invalid token" });
    }

    const userData = await UserModel.findById(validateToken?.userId);
    if (!userData) {
      return res.status(404).json({ message: "user not found" });
    }
    req.user = userData;
    next();
    return;
  } catch (error) {
    console.log("error varifying user", error.message);
    res.status(401).json({
      error: new Error("invalid request!"),
      message: `NOT AUTHORIZED`,
    });
  }
};
