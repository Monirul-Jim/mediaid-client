import dbConnect from "@/config/dbConfig";
import categoriesModel from "@/models/categoryModel";
import { NextResponse } from "next/server";
dbConnect();

// Get Categories
export async function GET() {
  try {
    const categories = await categoriesModel.find();
    return NextResponse.json({ success: true, categories });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error?.message || "Something want wrong !" },
      { status: 400 }
    );
  }
}

// Create Categories
export async function POST(req) {
  //   Protected by admin / vendor

  // get input data
  const input = await req.json();
  try {
    // Check input data
    if (!input.name || !input.image || !input.createdBy) {
      return NextResponse.json(
        { success: false, message: "Invalid credentials !" },
        { status: 400 }
      );
    }
    // create categories
    await categoriesModel.create(input);
    return NextResponse.json(
      { success: true, message: "Category added successfully !" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message || "Something want wrong !" },
      { status: 400 }
    );
  }
}
