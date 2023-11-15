import { NextResponse } from "next/server";

// Register User
export async function POST(req) {
  try {
    const data = await req.json();
    if (
      !data.name ||
      !data.email ||
      !data.phone ||
      !data.city ||
      !data.password
    ) {
      return NextResponse.json({
        message: "Invalid credentials !",
        success: false,
      });
    }
    return NextResponse.json({ message: "Error" });
  } catch (err) {
    return NextResponse.json(
      { message: error.message || "Something went wrong !" },
      { status: 400 }
    );
  }
}

// Update User
export async function PUT(req) {
  try {
    const data = await req.json();
    if (
      !data.name ||
      !data.email ||
      !data.oldPassword ||
      !data.phone ||
      !data.image
    ) {
      return NextResponse.json({
        success: false,
        message: "Invalid credentials !",
      });
    }
    return NextResponse.json({ success: true, data: 1 });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message || "Something went wrong !" },
      { status: 400 }
    );
  }
}
