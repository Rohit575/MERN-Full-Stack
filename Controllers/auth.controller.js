import JWT from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { AuthModel } from "../Models/AuthSchema.js";

const registerController = async (req, res, next) => {
  try {
    const userExist = await AuthModel.findOne({ email: req.body.email });
    if (userExist) {
      return res.json({
        statusCode: 400,
        message: "User already exists",
        data: null,
        error: null,
      });
    }

    const hashedPass = await bcrypt.hash(req.body.password, 10);
    req.body.password = hashedPass;

    const newUser = new AuthModel(req.body);

    const result = await newUser.save();

    res.json({
      statusCode: 200,
      message: "User registered successfully",
      data: result,
      error: null,
    });
  } catch (error) {
    console.log(error);
  }
};

export { registerController };
