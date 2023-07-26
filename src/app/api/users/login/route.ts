import bcryptjs from "bcryptjs";
import { dbConnect } from "@/dbConnect/dbConnect";
import User from "@/models/usersModels";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;
    console.log(reqBody);
    await dbConnect();
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { message: "User Does not Exits" },
        { status: 500 }
      );
    }
    //check password
    const validPassword = await bcryptjs.compare(password, user.password);
    if (!validPassword) {
      return NextResponse.json(
        { message: "Password Doest Not Match" },
        { status: 500 }
      );
    }
    //create token data
    const tokenData = {
      id: user?._id,
      name: user?.name,
      email: user?.email,
    };
    // create token
    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRATE!, {
      expiresIn: "1d",
    });
    const response = NextResponse.json({
      message: "Login Successfully",
      success: true,
    });
    response.cookies.set("token", token, {
      httpOnly: true,
    });
    return response;
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
