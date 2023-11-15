import dbConnect from "@/config/dbConfig";
import productModel from "@/models/productModel";
import { NextResponse } from "next/server";

export async function GET(req) {
  const queryString = req.nextUrl.searchParams.get("tags");
  dbConnect();
  try {
    // find multi product By array of string
    const tags = queryString.split("-"); // Query= "a-b-c"  = ["a", "b", "c"]
    // search string of array in products
    const products = await productModel.aggregate([
      { $match: { status: "active", tag: { $in: tags } } },
      { $sample: { size: 20 } },
    ]);

    return NextResponse.json({ success: true, product: products });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error.message || "Something want wrong !",
      },
      { status: 400 }
    );
  }
}
