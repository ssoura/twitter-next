import mongoose from "mongoose";
import { initDB } from "../../lib/db";
import User from "../../models/User";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";

export default async function handle(req, res) {
  await initDB();
  const session = await unstable_getServerSession(req, res, authOptions);

  if (req.method === "PUT") {
    const { username } = req.body;
    await User.findByIdAndUpdate(session.user.id, { username });
    res.json("ok");
  }
  if (req.method === "GET") {
    const { id, username } = req.query;
    const user = id
      ? await User.findById(id)
      : await User.findOne({ username });
    res.json({ user });
  }
}
