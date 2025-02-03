// app/api/searchFlights/route.ts
import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

interface SearchRequestBody {
  description: string;
  selectedTags: string[];
  budget: string;
  origin: string;          // e.g. "LON"
  destinationCode: string; // e.g. "BCN"
  departureDate: string;   // e.g. "2024-01-15"
  returnDate: string;      // e.g. "2024-01-22"
}

interface Flight {
  id: string;
  destination: string;
  price: number;
}

// Example function to call an LLM (OpenAI) to extract tags
async function extractTagsFromDescription(
  description: string,
  existingTags: string[]
): Promise<string[]> {
  // If user explicitly selected tags, we'll just return them
  if (existingTags && existingTags.length > 0) {
    return existingTags;
  }

  // LLM API key
  const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
  if (!OPENAI_API_KEY) {
    console.error("OPENAI_API_KEY not set");
    return [];
  }

  const prompt = `
  Extract relevant travel tags from the following description (as JSON array):
  "${description}"
  `;

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 50,
        temperature: 0.7,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${OPENAI_API_KEY}`,
        },
      }
    );

    const reply: string = response.data.choices[0].message.content;
    const tags: string[] = JSON.parse(reply);

    return tags;
  } catch (error) {
    console.error("Error parsing LLM response:", error);
    return [];
  }
}

/**
 * Example function to query the Skyscanner API via RapidAPI
 * and return an array of flights that match your interface.
 */
async function getFlights(
  tags: string[],        // LLM or user-selected tags (optional use in the query)
  budget: string,
  origin: string,
  destinationCode: string,
  departureDate: string,
  returnDate: string
): Promise<Flight[]> {
  // RapidAPI Key stored in .env.local
  const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY;
  if (!RAPIDAPI_KEY) {
    console.error("RAPIDAPI_KEY not set");
    return [];
  }

  // Example RapidAPI Skyscanner endpoint
  // (Update to match EXACT endpoint & parameters from RapidAPI docs)
  const endpoint = "https://skyscanner44.p.rapidapi.com/search";

  try {
    // Typically, Skyscanner via RapidAPI wants you to pass query parameters
    // like 'origin', 'destination', 'departDate', 'returnDate', 'currency', etc.
    // The names may differ. Check your chosen endpoint's docs.
    const response = await axios.get(endpoint, {
      params: {
        // You might rename these to what the API specifically expects.
        // The property names below are placeholders for demonstration.
        origin: origin,
        destination: destinationCode,
        departDate: departureDate,
        returnDate: returnDate,
        currency: "USD",
        // Possibly incorporate the 'budget' or 'tags' if your endpoint supports them:
        // budget,
        // tags: tags.join(","),
      },
      headers: {
        "X-RapidAPI-Key": RAPIDAPI_KEY,
        "X-RapidAPI-Host": "skyscanner44.p.rapidapi.com", // or whichever host is specified
      },
    });

    // The shape of response.data depends on the RapidAPI endpoint.
    // Suppose the data is under 'response.data.data' (just an example).
    // We'll transform it into our Flight[] shape (id/destination/price).
    const rawFlights = response.data?.data ?? [];

    // Transform rawFlights to match your `Flight` interface
    const flights: Flight[] = rawFlights.map((item: any) => {
      return {
        id: item.id?.toString() || "N/A",
        destination: item.destination || "Unknown",
        price: item.price || 0,
      };
    });

    // If you want to filter by budget on the server side:
    const filteredByBudget = flights.filter((f) => f.price <= Number(budget));

    return filteredByBudget;
  } catch (error) {
    console.error("Error fetching flights from RapidAPI:", error);
    return [];
  }
}

/**
 * POST handler for /api/searchFlights
 * Next.js 13 route handler using "export async function POST(...)"
 */
export async function POST(request: NextRequest) {
  try {
    // 1) Parse the request body coming from the client
    const body = (await request.json()) as SearchRequestBody;
    const {
      description,
      selectedTags,
      budget,
      origin,
      destinationCode,
      departureDate,
      returnDate,
    } = body;

    // 2) Extract or confirm tags (either from the LLM or the user’s selection)
    const tags = await extractTagsFromDescription(description, selectedTags);

    // 3) Fetch flights from RapidAPI's Skyscanner using the above fields
    const flights = await getFlights(
      tags,
      budget,
      origin,
      destinationCode,
      departureDate,
      returnDate
    );

    // 4) Return flight data in JSON format
    return NextResponse.json({ flights }, { status: 200 });
  } catch (error) {
    console.error("Error in searchFlights route:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
