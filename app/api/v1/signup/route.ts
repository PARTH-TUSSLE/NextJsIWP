import { NextRequest, NextResponse } from "next/server";

export async function POST (req: NextRequest) {

  const { name, email, password} = await req.json();

  console.log(name, email, password);

  return NextResponse.json({
    msg: "Signup successfull !",
    name,
    email,
    password
  })
}