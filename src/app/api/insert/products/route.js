// Get Category based products

import dbConnect from "@/config/dbConfig";
import { dummyProducts } from "@/constant/insertProducts";
import productModel from "@/models/productModel";
import { NextResponse } from "next/server";

dbConnect();

export async function POST() {
  try {
    // Insert dummy products
    await productModel.insertMany(dummyProducts);
    // response
    return NextResponse.json({ message: "Added success !" });
  } catch (error) {
    return NextResponse.json({ message: error.message || "Error" });
  }
}
