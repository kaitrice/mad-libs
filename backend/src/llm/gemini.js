import { GoogleGenAI } from "@google/genai";
import { configDotenv } from "dotenv";
import { candidateBucket, canUseLLM, promptBucket } from "./buckets/index.js";

configDotenv();

const ai = new GoogleGenAI({});

async function checkTokens(params) {
    const countTokensResponse = await ai.models.countTokens(params);
    const countPrompt = countTokensResponse.totalTokens;
    if (!promptBucket.availablePromptTokens(countPrompt)) throw new Error(
        "No tokens available."
    );
}

function validatePrompt(prompt, settings) {
    if (!prompt?.trim()) throw new Error(
        "Prompt cannot be null."
    );

    if (!canUseLLM()) throw new Error(
        "No requests available."
    );

    return {
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
            safetySettings: settings,
            thinkingConfig: {
                thinkingBudget: 0
            },
            responseMimeType: "application/json"
        }
    };
}

function validateResponse(response) {
    if (!response || 
        !response.text || 
        !response.usageMetadata || 
        !response.usageMetadata.candidatesTokenCount
    ) throw new Error(
        "Invalid response."
    );
    const countCandidate = response.usageMetadata.candidatesTokenCount;
    candidateBucket.addCandidateTokens(countCandidate);
    return response.text;
}

export default async ({ prompt, settings }) => {
    try {
        const params = validatePrompt(prompt, settings);

        console.time("Gemini task");

        await checkTokens(params);
        const response = await ai.models.generateContent(params);
        const text = validateResponse(response)

        return JSON.parse(text);
    } catch (error) {
        console.error("Gemini API Error:", error);
        throw error;
    } finally {
        console.timeEnd("Gemini task");
        // console.log(`Gemini completed task in ${((end - start) / 1000).toFixed(2)} s`);
    }
}