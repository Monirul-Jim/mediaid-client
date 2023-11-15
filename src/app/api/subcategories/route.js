import dbConnect from "@/config/dbConfig";
import subcategoriesModel from "@/models/subcategoryModel";
import { NextResponse } from "next/server";
dbConnect();

// Get Categories
export async function GET() {
  try {
    const subcategories = await subcategoriesModel.find();
    return NextResponse.json({ success: true, subcategories }, { status: 400 });
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
    if (!input.name || !input.image || !input.category || !input.createdBy) {
      return NextResponse.json(
        { success: false, message: "Invalid credentials !" },
        { status: 400 }
      );
    }
    // create categories
    await subcategoriesModel.create(input);
    return NextResponse.json(
      { success: true, message: "Subcategory added successfully !" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error?.message || "Something want wrong !" },
      { status: 400 }
    );
  }
}
