import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Student from "@/app/api/model/hello/model";


export async function POST(request) {
  try {
    await connectDB();
    // Parse the request body
    const body = await request.json();
    // Create a new student document
    const student = Student.create({
      name: body.name,
      age: body.age,
      email: body.email,
    });
    // Return a JSON response
    return NextResponse.json({ message: "Student created", student });
  } catch (err) {
    console.error("Error connecting to the database:", err);
    return NextResponse.json({ error: "Failed to connect to the database" }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectDB();
    // Return a JSON response
    const students = await Student.find();
    return NextResponse.json({ message: "Student created", students });
  }
  catch (err) {
    console.error("Error connecting to the database:", err);
    return NextResponse.json({ error: "Failed to connect to the database" }, { status: 500 });
  }
}
export async function DELETE(request) {
  try {
    await connectDB();
    const id= request.nextUrl.searchParams.get("id");
    // Return a JSON response
    const students = await Student.findByIdAndDelete(id);
    return NextResponse.json({ message: "Student deleted", students });
  }
  catch (err) {
    console.error("Error connecting to the database:", err);
    return NextResponse.json({ error: "Failed to connect to the database" }, { status: 500 });
  }
}