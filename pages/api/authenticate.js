import dbConnect from "../../database/dbConnect";
import User from "../../database/models/User";
import bcryptjs from "bcryptjs";

export default async function handler(req, res) {
  await dbConnect();

  const { name, password } = req.body;

  const user = await User.findOne({ name }).select("+password");

  if (!user) return res.status(400).json({ error: "User not found" });

  if (!(await bcryptjs.compare(password, user.password)))
    return res.status(400).json({ error: "Invalid password" });

  return res.json(user);
}
