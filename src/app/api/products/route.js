import dbConnect from "@/config/dbConfig";
import productModel from "@/models/productModel";
import { NextResponse } from "next/server";
dbConnect();

export async function GET(req) {
  // Params from query string
  const types = req.nextUrl.searchParams.get("types");
  const limit = req.nextUrl.searchParams.get("limit");

  try {
    switch (types) {
      case "flash_sale": {
        const data = await productModel.aggregate([
          { $match: { status: "active", typeOfSelling: "flash_sale" } },
          { $sample: { size: limit || 20 } },
        ]);
        return NextResponse.json({ success: true, products: data });
      }
      case "best_sale": {
        const data = await productModel.aggregate([
          { $match: { status: "active", typeOfSelling: "best_sale" } },
          { $sample: { size: limit || 20 } },
        ]);
        return NextResponse.json({ success: true, products: data });
      }
      case "popular": {
        const data = await productModel.aggregate([
          { $match: { status: "active", typeOfSelling: "popular" } },
          { $sample: { size: limit || 20 } },
        ]);
        return NextResponse.json({ success: true, products: data });
      }
      case "feature": {
        const data = await productModel.aggregate([
          { $match: { status: "active", typeOfSelling: "feature" } },
          { $sample: { size: limit || 20 } },
        ]);
        return NextResponse.json({ success: true, products: data });
      }
      case "push": {
        const data = await productModel.aggregate([
          { $match: { status: "active", typeOfSelling: "push" } },
          { $sample: { size: limit || 20 } },
        ]);
        return NextResponse.json({ success: true, products: data });
      }
      case "new": {
        const data = await productModel.aggregate([
          { $match: { status: "active", typeOfSelling: "new" } },
          { $sample: { size: limit || 20 } },
        ]);
        return NextResponse.json({ success: true, products: data });
      }
      default: {
        // default get product
        const data = await productModel.aggregate([
          { $match: { status: "active" } },
          { $sample: { size: limit || 20 } },
        ]);
        return NextResponse.json({ success: true, products: data });
      }
    }
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message || "Something want wrong !" },
      { status: 400 }
    );
  }
}
