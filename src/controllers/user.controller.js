import Users from "../models/user.model.js";

export const getAllUser = async (req, res) => {
  try {
    const allUsers = await Users.find();
    if (!allUsers || (allUsers && Object.keys(allUsers).length === 0)) {
      return res.status(400).json({ message: "no user found" });
    }
    return res
      .status(200)
      .json({ message: "all users gotten successfully", data: allUsers });
  } catch (error) {
    console.log("error getting all users", error);
    res.status(500).json({ message: "internal server error", error });
  }
};
