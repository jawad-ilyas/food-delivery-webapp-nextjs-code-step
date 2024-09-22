import mongoose, { mongo } from "mongoose";
import { NextResponse } from "next/server";
import { connectionDb } from "../../db/index.db";
import { Resturant } from "../../models/resturants.model";

connectionDb();

export async function GET() {
    const data = await Resturant.find();
    return NextResponse.json({ result: data })
}
