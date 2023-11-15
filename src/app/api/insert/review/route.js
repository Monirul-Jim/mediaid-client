import { dummyReviews } from "@/constant/inserReview";
import reviewModel from "@/models/reviewMode";
import { NextResponse } from "next/server";


export async function POST(req){
    try {
        await reviewModel.insertMany(dummyReviews)
        return NextResponse.json({success:true, message:'success'})
    } catch (error) {
        return NextResponse.json({message: error.message||"Something want wrong !",success: false},{status:400});
    }
}