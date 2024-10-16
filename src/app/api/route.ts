import { NextResponse } from "next/server";
import { deserialize } from "superjson";

export const runtime = 'edge';

export async function POST(request: Request) {
  try {
    // Parse the JSON body from the request
    const body = await request.json();

    const result = deserialize(body);

    console.log(result.data.startDate.getTime());

    // Return the parsed body as the response
    return NextResponse.json(body, { status: 200 });
  } catch (error) {
    // If there's an error parsing the JSON or processing the request
    return NextResponse.json(
      { error: "Error processing request" },
      { status: 400 }
    );
  }
}
