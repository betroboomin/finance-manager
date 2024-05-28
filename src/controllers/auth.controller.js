import bcrypt from "bcrypt";
import UserModel from "../models/user.model.js";
import jwt from "jsonwebtoken";

const registerController = async (req, res) => {
  const { email, name, username, password } = req.body;
  try {
    const checkifuserExist = await UserModel.findOne({ email, name });
    if (checkifuserExist) {
      return res.status(401).json({ message: "user already exist" });
    }

    const saltRounds = 10;
    const encrypt = await bcrypt.hash(password, saltRounds);

    const newModel = new UserModel({
      ...req.body,
      password: encrypt.toString(),
    });
    const savedData = await newModel.save();
    return res
      .status(200)
      .json({ message: "user registerd successfully", data: savedData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error, message: "Internal server error" });
  }
};

const loginController = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const checkifuserExist = await UserModel.findOne({ email });

    if (!checkifuserExist) {
      return res.status(404).json({ message: "user alreasy exist" });
    }

    const passwordCheck = await bcrypt.compare(
      password,
      checkifuserExist?.password
    );
    if (!passwordCheck) {
      return res.status(400).json({ message: "incorrect password" });
    }

    const token = jwt.sign(
      {
        userId: checkifuserExist?._id,
        userEmail: checkifuserExist?.email,
      },
      "RANDOM_TOKEN",
      {
        expiresIn: "24h",
      }
    );
    return res.status(200).json({
      message: "login was successful",
      data: checkifuserExist,
      token,
    });
  } catch (error) {}
};

export { registerController, loginController };
