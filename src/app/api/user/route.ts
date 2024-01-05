"use server";
import { writeFile } from "fs/promises";
import { NextResponse, NextRequest } from "next/server";
import path from "path";
import main from "../db/db";
import userModel from "../model/userModel";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

main();

export async function POST(req: NextRequest) {
  const salt = await bcryptjs.genSalt(10);
  const data = await req.formData();
  const formImg = data.get("img");
  const name = data.get("name");
  const email = data.get("email");
  const password = data.get("password");
  let filename: string;
  console.log(name, password, email);
  if (formImg) {
    filename = await insertingImage(formImg);
  }
  const findUser = await userModel.findOne({ email });
  const hashPassword = await bcryptjs.hash(password, salt);
  if (!findUser) {
    const userDoc = new userModel({
      name,
      email,
      password: hashPassword,
      pic: filename,
    });
    await userDoc.save();
    // console.log(userDoc);
    const token = await jwt.sign(
      {
        name: userDoc.name,
        email: userDoc.email,
        id: userDoc._id,
        pic: userDoc.pic,
      },
      process.env.PrivateKey,
      {}
    );
    const response = NextResponse.json({ message: "Success" }, { status: 201 });
    response.cookies.set(process.env.TokenName, token);
    return response;
  } else {
    return NextResponse.json(
      { message: "Account already exists" },
      { status: 400 }
    );
  }
}

export async function GET(req: NextRequest) {
  const cookieStore = cookies();
  const getCookie = cookieStore.get(process.env.TokenName);
  const data = await jwt.verify(getCookie.value, process.env.PrivateKey);
  return NextResponse.json(data);
}

async function insertingImage(formImg): Promise<string> {
  let filename: string;
  if (formImg instanceof File) {
    const buffer = Buffer.from(await formImg.arrayBuffer());
    filename = Date.now() + formImg.name.replaceAll(" ", "-");
    const fileArr = filename.split(".");
    if (fileArr[1] === "jpg" || fileArr[1] === "jpeg")
      try {
        await writeFile(
          path.join(process.cwd(), "public/uploads/", filename),
          buffer
        );
        return filename;
      } catch (error) {
        // return NextResponse.json({Message: 'Failed', status: "500"})
      }
  } else {
    console.log("There is no file");
  }
}
