import { GoogleGenAI } from "@google/genai";
import { configDotenv } from "dotenv";

configDotenv();

const ai = new GoogleGenAI({});

export default async ({ thinking, prompt, settings }) => {
    if (!prompt) throw new Error("Error: prompt cannot be null.");

    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
            ...settings,
            thinkingConfig: {
                thinkingBudget: thinking ? -1 : 0
            }
        }
    });

    return response.text;
}