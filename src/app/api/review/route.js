import dbConnect from "@/config/dbConfig";
import productModel from "@/models/productModel";
import reviewModel from "@/models/reviewMode";
import { NextResponse } from "next/server";
dbConnect();

// get review
export async function GET(req) {
  const productId = req.nextUrl.searchParams.get("product");
  const limit = req.nextUrl.searchParams.get("limit");
  try {
    // Limit 10 + load more +10
    const reviews = await reviewModel
      .find({ product: productId })
      .limit(limit || 10);
    const review = await reviewModel.find({ product: productId });

    // Count total ratings
    const oneStar = review.filter((x) => x.noOfStar === 1);
    const twoStar = review.filter((x) => x.noOfStar === 2);
    const threeStar = review.filter((x) => x.noOfStar === 3);
    const fourStar = review.filter((x) => x.noOfStar === 4);
    const fiveStar = review.filter((x) => x.noOfStar === 5);
    const totalRatings =
      oneStar.length +
      twoStar.length * 2 +
      threeStar.length * 3 +
      fourStar.length * 4 +
      fiveStar.length * 5;
    return NextResponse.json({
      success: true,
      reviews,
      totalReview: reviews.length,
      totalRatings,
    });
  } catch (error) {
    return NextResponse.json(
      { message: error.message || "Something want wrong!", success: false },
      { status: 400 }
    );
  }
}
// add review
export async function POST(req) {
  try {
    // add review
    const data = await req.json();
    // check input fields
    if (
      !data.noOfStar ||
      data.noOfStar < 1 ||
      data.noOfStar > 5 ||
      !data.user ||
      !data.product
    ) {
      return NextResponse.json(
        { message: "Invalid credentials !", success: false },
        { status: 400 }
      );
    }
    // add review
    const product = await productModel.findById(data.product);
    if (!product) {
      return NextResponse.json(
        { message: "Invalid product !", success: false },
        { status: 400 }
      );
    }
    const existingReview = await reviewModel.findOne({
      user: data.user,
      product: data.product,
    });
    if (existingReview) {
      return NextResponse.json(
        { message: "Already reviewed !", success: false },
        { status: 400 }
      );
    }
    await reviewModel.create(data);
    // calculate product review
    // (5*252 + 4*124 + 3*40 + 2*29 + 1*33) / (252+124+40+29+33) = 4.11 and change
    const reviewedProduct = await reviewModel.find({ product: data.product });
    const oneStar = reviewedProduct.filter((x) => x.noOfStar === 1);
    const twoStar = reviewedProduct.filter((x) => x.noOfStar === 2);
    const threeStar = reviewedProduct.filter((x) => x.noOfStar === 3);
    const fourStar = reviewedProduct.filter((x) => x.noOfStar === 4);
    const fiveStar = reviewedProduct.filter((x) => x.noOfStar === 5);
    const totalMulti =
      oneStar.length +
      twoStar.length * 2 +
      threeStar.length * 3 +
      fourStar.length * 4 +
      fiveStar.length * 5;
    const totalStar =
      oneStar.length +
      twoStar.length +
      threeStar.length +
      fourStar.length +
      fiveStar.length;
    const avg = totalMulti / totalStar;
    // result
    await productModel.findOneAndUpdate(
      { _id: data.product },
      {
        $set: { rating: avg || 0 },
      }
    );
    return NextResponse.json({
      success: true,
      message: "Review successfully !",
    });
  } catch (error) {
    return NextResponse.json(
      { message: error.message || "Something want wrong!", success: false },
      { status: 400 }
    );
  }
}
