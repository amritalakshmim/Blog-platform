import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function main(prompt) {
  const response = await ai.models.generateContent({
    // model: "gemini-3.7-flash",
    model: "gemini-3.5-flash-lite",
    contents: prompt,
  });
  return response.text;
}

export default main;




















// import { GoogleGenAI } from "@google/genai";

// const ai = new GoogleGenAI({});

// const interaction = await ai.interactions.create({
//   model: "gemini-3.7-flash",
//   input: "Explain how AI works in a few words",
// });

// console.log(interaction.output_text);
