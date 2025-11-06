"use client";

import React, { useState } from "react";

// Flight interface for typed results
interface Flight {
  id: string;
  destination: string;
  price: number;
}

export default function Home() {
  // Existing states
  const [description, setDescription] = useState<string>("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [budget, setBudget] = useState<string>("");

  // New fields for flight search (common in flight APIs):
  const [origin, setOrigin] = useState<string>("LON"); // e.g. "LON" for London
  const [destinationCode, setDestinationCode] = useState<string>("BCN"); // e.g. "BCN" for Barcelona
  const [departureDate, setDepartureDate] = useState<string>("2024-01-15"); 
  const [returnDate, setReturnDate] = useState<string>("2024-01-22");

  // Results from the API
  const [results, setResults] = useState<Flight[]>([]);

  // Predefined tags (for the LLM part)
  const availableTags: string[] = [
    "beach",
    "sunny/warm",
    "europe",
    "historical",
    "adventure",
    "nature",
  ];

  // Toggle tag selection
  const toggleTag = (tag: string) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag)
        ? prevTags.filter((t) => t !== tag)
        : [...prevTags, tag]
    );
  };

  // Handle the search logic
  const handleSearch = async () => {
    try {
      const response = await fetch("/api/searchFlights", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        /**
         * Send all relevant data (including origin/destination/dates).
         * The route.ts file can then use these to make a proper request
         * to the Skyscanner endpoint via RapidAPI.
         */
        body: JSON.stringify({
          description,
          selectedTags,
          budget,
          origin,
          destinationCode,
          departureDate,
          returnDate,
        }),
      });

      if (!response.ok) {
        console.error("Error fetching flight data:", await response.text());
        return;
      }

      const data = await response.json();
      setResults(data.flights || []);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <main style={{ padding: "2rem" }}>
      <h1>CheekyEscapes</h1>

      {/* Description Input (used by LLM to extract tags) */}
      <div>
        <label style={{ display: "block", marginBottom: "0.25rem" }}>
          Describe your holiday:
        </label>
        <textarea
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ width: "100%", padding: "0.5rem", color: "black"}}
        />
      </div>

      {/* Example fields for flight parameters */}
      <div style={{ marginTop: "1rem" }}>
        <label>
          Origin (IATA code):{" "}
          <input
            type="text"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
            style={{ marginLeft: "0.5rem", color: "black" }}
          />
        </label>
      </div>

      <div style={{ marginTop: "1rem" }}>
        <label>
          Destination (IATA code):{" "}
          <input
            type="text"
            value={destinationCode}
            onChange={(e) => setDestinationCode(e.target.value)}
            style={{ marginLeft: "0.5rem", color: "black" }}
          />
        </label>
      </div>

      <div style={{ marginTop: "1rem" }}>
        <label>
          Departure Date:
          <input
            type="date"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
            style={{ marginLeft: "0.5rem", color: "black"}}
          />
        </label>
      </div>

      <div style={{ marginTop: "1rem" }}>
        <label>
          Return Date:
          <input
            type="date"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            style={{ marginLeft: "0.5rem", color: "black"}}
          />
        </label>
      </div>

      {/* Tag Buttons */}
      <div style={{ marginTop: "1rem" }}>
        <p>Select interests/tags:</p>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {availableTags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => toggleTag(tag)}
              style={{
                padding: "0.5rem 1rem",
                background: selectedTags.includes(tag)
                  ? "#0070f3"
                  : "#eaeaea",
                color: selectedTags.includes(tag) ? "#fff" : "#000",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Budget */}
      <div style={{ marginTop: "1rem" }}>
        <label>
          Budget ($):
          <input
            type="number"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            style={{ marginLeft: "0.5rem", color: "black"}}
          />
        </label>
      </div>

      {/* Search Button */}
      <div style={{ marginTop: "1rem" }}>
        <button
          onClick={handleSearch}
          style={{ padding: "0.75rem 1.5rem", fontSize: "1rem"}}
        >
          Search
        </button>
      </div>

      {/* Results */}
      <div style={{ marginTop: "2rem" }}>
        <h2>Results</h2>
        {results.length > 0 ? (
          <ul>
            {results.map((flight) => (
              <li key={flight.id}>
                {flight.destination} – ${flight.price}
              </li>
            ))}
          </ul>
        ) : (
          <p>No results yet</p>
        )}
      </div>
    </main>
  );
}
