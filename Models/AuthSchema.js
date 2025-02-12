import mongoose from "mongoose";

const AuthSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    profilePic: {
      url: {
        type: String,
        default:
          "https://res.cloudinary.com/ds0f6df5e/image/upload/v1739354541/default_image_grdcyn.webp",
      },
      public_id: {
        type: String,
        default: null,
      },
    },
  },
  {
    timestamps: true,
  }
);

export const AuthModel = mongoose.model("User", AuthSchema);
