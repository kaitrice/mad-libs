import { GoogleGenAI } from "@google/genai";
import { configDotenv } from "dotenv";

configDotenv();

const ai = new GoogleGenAI({});

export default async ({  prompt, settings }) => {
    if (!prompt?.trim()) throw new Error(
        "Error: prompt cannot be null."
    );

    const start = performance.now();

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                ...settings,
                thinkingConfig: {
                    thinkingBudget: 0
                }
            }
        });

        if (!response || !response.text) throw new Error(
            "API returned an invalid or empty response."
        );

        return response.text;
    } catch (error) {
        console.error("Gemini API Error:", error);
        throw error;
    } finally {
        const end = performance.now();
        console.log(`Gemini completed task in ${((end - start) / 1000).toFixed(2)} s`);
    }
}