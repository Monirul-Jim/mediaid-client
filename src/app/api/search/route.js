import dbConnect from "@/config/dbConfig";
import productModel from "@/models/productModel";
import { NextResponse } from "next/server";
dbConnect();

export async function GET(req) {
  const keyword = req.nextUrl.searchParams.get("keyword");
  const category = req.nextUrl.searchParams.get("category");

  try {
    if (category && keyword) {
      // Search products by title and tags from category
      const products = await productModel
        .find({
          $or: [
            { title: { $regex: keyword, $options: "i" } },
            { tag: { $in: keyword } },
          ],
          category,
        })
        .limit(8);
      return NextResponse.json({ success: true, products });
    }
    if (keyword) {
      // Search products by title and tags from keywords
      const products = await productModel
        .find({
          $or: [
            { title: { $regex: keyword, $options: "i" } },
            { tag: { $in: keyword } },
          ],
        })
        .limit(8);
      return NextResponse.json({ success: true, products });
    }
    return NextResponse.json(
      { message: "No keyword founds !", success: false, products: [] },
      { status: 400 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message || "Something went wrong !" },
      { status: 400 }
    );
  }
}
