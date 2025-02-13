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

    const token = JWT.sign(
      { id: result._id, email: result.email },
      process.env.JWT_SECRET_KEY
    );

    res.json({
      statusCode: 200,
      message: "User registered successfully",
      data: { data: result, token: token },
      error: null,
    });
  } catch (error) {
    console.log(error);
  }
};

const loginController = async (req, res, next) => {
  try {
    const userExist = await AuthModel.findOne({ email: req.body.email });
    if (!userExist) {
      return res.json({
        statusCode: 400,
        message: "User does not exist",
        data: null,
        error: null,
      });
    }
    const verifyPass = await bcrypt.compare(
      req.body.password,
      userExist.password
    );
    if (!verifyPass) {
      return res.json({
        statusCode: 400,
        message: "Password is incorrect",
        data: null,
        error: null,
      });
    }

    const token = JWT.sign(
      { id: userExist._id, email: userExist.email },
      process.env.JWT_SECRET_KEY
    );

    res.json({
      statusCode: 200,
      message: "User logged in successfully",
      data: { data: userExist, token: token },
      error: null,
    });
  } catch (error) {
    console.log(error);
  }
};

export { registerController, loginController };
