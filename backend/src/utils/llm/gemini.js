import { GoogleGenAI } from "@google/genai";
import { candidateBucket, promptBucket, requestBucket } from "./buckets/index.js";
import logger from "../../middleware/logger.js";

const ai = new GoogleGenAI({});

async function checkPromptTokens(params) {
    const countTokensResponse = await ai.models.countTokens(params);
    const countPrompt = countTokensResponse.totalTokens;
    if (!promptBucket.availablePromptTokens(countPrompt)) {
        requestBucket.removeRequestToken();
        throw new Error(
            "No tokens available."
        );
    }
}

function formatArgs(prompt, settings) {
    if (!prompt?.trim()) throw new Error(
        "Prompt cannot be null."
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
        const args = formatArgs(prompt, settings);

        console.time("Gemini task");

        await checkPromptTokens(args);
        const response = await ai.models.generateContent(args);
        const text = validateResponse(response);

        return JSON.parse(text);
    } catch (error) {
        logger.error({
            error, 
            label: "Gemini Error"
        });
        throw error;
    } finally {
        console.timeEnd("Gemini task");
    }
}