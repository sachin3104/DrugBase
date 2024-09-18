// src/app/api/generate-molecules/route.ts

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // Parse the request body
    const body = await req.json();
    const {
      algorithm,
      num_molecules,
      property_name,
      minimize,
      min_similarity,
      particles,
      iterations,
      smi,
    } = body;

    // Define the payload to send to NVIDIA's API
    const payload = {
      algorithm: "CMA-ES",
      num_molecules: num_molecules,
      property_name: "QED",
      minimize: false,
      min_similarity: min_similarity,
      particles: particles,
      iterations: iterations,
      smi: smi,
    };

    // Fetch the API key from environment variables
    const API_KEY = process.env.NVIDIA_API_KEY;

    // Call the NVIDIA API
    const response = await fetch(
      "https://health.api.nvidia.com/v1/biology/nvidia/molmim/generate",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      },
    );

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    // Parse the JSON response from NVIDIA API
    const data = await response.json();

    // Return the response back to the client
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error in API request:", error);
    return NextResponse.json(
      { message: "Server Error", error: (error as Error).message },
      { status: 500 },
    );
  }
}
