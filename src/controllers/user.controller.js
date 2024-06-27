import { asyncHandler } from "../utils/asyncHandler.js";

const userRegister = asyncHandler(async (req, res) => {
  res.json({
    message: "User registered successfully",
  });
});

export { userRegister };
