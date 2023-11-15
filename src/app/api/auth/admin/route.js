import dbConnect from "@/config/dbConfig";
import { NextResponse } from "next/server";
dbConnect();

// Login admin model
export async function POST(req) {
  try {
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
