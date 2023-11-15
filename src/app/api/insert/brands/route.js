// Get Category based products

import dbConnect from "@/config/dbConfig";
import { dummyBrands } from "@/constant/insertBrands";
import brandModel from "@/models/brandModel";
import { NextResponse } from "next/server";

dbConnect();

export async function POST() {
  try {
    // Insert dummy products
    await brandModel.insertMany(dummyBrands);
    // response
    return NextResponse.json({ message: "Added success !" });
  } catch (error) {
    return NextResponse.json({ message: error.message || "Error" });
  }
}
