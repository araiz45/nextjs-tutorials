"use server";
import { writeFile } from "fs/promises";
import { NextResponse, NextRequest } from "next/server";
import path from "path";
import main from "../db/db";
import userModel from "../model/userModel";

main();
export async function POST(req: NextRequest) {
  const data = await req.formData();
  const formImg = data.get('img');
  const name = data.get('name')
  const email = data.get('email')
  const password = data.get('password');
  let filename: string;
  console.log(name, password, email)
  if (formImg) {
    if (formImg instanceof File) {
    const buffer = Buffer.from (await formImg.arrayBuffer())
    filename = Date.now() + formImg.name.replaceAll(" ", "-");
    try {
      await writeFile(
        path.join(process.cwd(), "public/uploads/", filename),
        buffer
      )
    } catch (error) {
      return NextResponse.json({Message: 'Failed', status: "500"})
    }
  } else {
    console.log("There is no file")
  }
  
  }
  console.log(filename)
return NextResponse.json({message: "Success"});
  
}
