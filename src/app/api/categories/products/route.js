import dbConnect from "@/config/dbConfig";
import { NextResponse } from "next/server";
dbConnect();

export async function GET(req) {
  try {
    return NextResponse.json({ success: true, message: "Success" });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error.message || "Something want wrong !",
    });
  }
}
