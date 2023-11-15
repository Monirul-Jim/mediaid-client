import dbConnect from "@/config/dbConfig";
import productModel from "@/models/productModel";
import { NextResponse } from "next/server";
import { v4 } from "uuid";
dbConnect();

export async function GET(req) {
  const sku = req.nextUrl.searchParams.get("sku");

  try {
    // find single product By SKU
    const product = await productModel
      .findOne({ sku })
      .populate({
        path: "category",
        model: "categories",
        select: "name",
      })
      .populate({
        path: "brand",
        model: "brands",
        select: "name",
      });
    return NextResponse.json({ success: true, product });
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

// Method Post
export async function POST(req) {
  const input = await req.json();

  // Protected by admin / vendor
  if (
    !input.title ||
    !input.description ||
    !input.price ||
    !input.category ||
    !input.subcategory ||
    // !input.brand ||
    !input.images ||
    !input.thumbnail ||
    !input.availableStock ||
    !input.addedBy
  ) {
    return NextResponse.json(
      { success: false, message: "Invalid credentials !" },
      { status: 400 }
    );
  }

  // Generate SKU
  const uniqueId = v4().split("-").pop();
  const addedSlice = input.addedBy.slice(-2); // last 2 digit of user
  const catSlice = input.category.slice(-2); // last 2 digit of category
  const sku = (`${addedSlice + catSlice}-` + uniqueId).toUpperCase();

  try {
    // Then added
    await productModel.create({
      ...input,
      sku,
      status: "inactive",
      totalSales: 0,
    });
    return NextResponse.json(
      { success: true, message: "Product added successfully !" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message || "Something want wrong !" },
      { status: 400 }
    );
  }
}
