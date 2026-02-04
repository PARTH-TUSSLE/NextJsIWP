import { NextResponse } from "next/server";

export function GET () {
  return NextResponse.json({
    name: "Parth Gartan",
    email: "parthgartan26feb@gmail.com" 
  })
} 

export function POST() {
  return NextResponse.json({
    name: "Parth Gartan",
    email: "parthgartan26feb@gmail.com",
  });
} 

export function PUT() {
  return NextResponse.json({
    name: "Parth Gartan",
    email: "parthgartan26feb@gmail.com",
  });
} 

export function DELETE() {
  return NextResponse.json({
    name: "Parth Gartan",
    email: "parthgartan26feb@gmail.com",
  });
} 