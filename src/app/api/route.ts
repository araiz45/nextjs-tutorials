import { NextRequest, NextResponse } from "next/server";
import main from "./db/db";

main();

export function GET() {
  return NextResponse.json("hello world");
}
