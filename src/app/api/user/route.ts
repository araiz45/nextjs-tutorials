"use server";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.formData();
  console.log(data);
  return NextResponse.json("okay");
}
