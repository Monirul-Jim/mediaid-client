import dbConnect from "@/config/dbConfig";
import adminModel from "@/models/adminModel";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
dbConnect();

export async function POST(req) {
  try {
    // Protected by admin

    // Admin only
    const input = await req.json();
    // Input data validation
    if (
      !input.name ||
      !input.email ||
      !input.phone ||
      !input.password ||
      !input.typeOfAccess ||
      !input.gender
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid credentials !",
        },
        { status: 400 }
      );
    }

    const encrypted = await bcrypt.hash(input.password, 10);

    await adminModel.create({ ...input, password: encrypted });
    return NextResponse.json({
      success: true,
      message: `Successfully added ${input.typeOfAccess} !`,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error.message || "Something went wrong !",
      },
      { status: 500 }
    );
  }
}
