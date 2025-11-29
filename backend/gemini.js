import { GoogleGenAI } from "@google/genai";
import { configDotenv } from "dotenv";

configDotenv();

const ai = new GoogleGenAI({});

export default async ({ thinking, prompt, settings }) => {
    if (!prompt) throw new Error("Error: prompt cannot be null.");

    const response = await ai.models.generateContent({
        model: thinking ? "gemini-2.5-pro" : "gemini-2.5-flash-lite",
        contents: prompt,
        config: settings
    });

    return response.text;
}