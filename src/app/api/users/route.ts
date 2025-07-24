import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import User from "@/models/user";
import { verifyToken } from "@/lib/verifyToken";

export async function GET(req: Request) {
  await connectDB();

  const decoded = verifyToken(req);
  if (!decoded) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error fetching user" }, { status: 500 });
  }
}