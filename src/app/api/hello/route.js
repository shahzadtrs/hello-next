// src/app/api/hello/route.js

import { NextResponse } from "next/server";

export async function GET(req) {
  // Parse the URL to extract query parameters
  const { searchParams } = new URL(req.url);
  const name = searchParams.get("name") || "Guest"; // Get the 'name' query parameter

  return NextResponse.json({ message: `Hello, ${name}!` });
}
