import { GoogleGenAI } from "@google/genai";

async function main(props) {
  const ai = new GoogleGenAI({
    apiKey: import.meta.env.VITE_GEMINI_API_KEY,
  });
  const config = {
    responseMimeType: "text/plain",
  };
  const model = "gemini-1.5-flash";
  const contents = [
    {
      role: "user",
      parts: [
        {
          text: `${props}`,
          mimeType: "text/plain",
        },
      ],
    },
  ];

  const response = await ai.models.generateContentStream({
    model,
    config,
    contents,
  });
  let result=''
  for await (const chunk of response) {
    console.log(chunk.text);
    result += chunk.text
  }
  return result;
}

export default main;
