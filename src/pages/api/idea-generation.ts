import { configuration } from "@/constants/config";
import type { NextApiRequest, NextApiResponse } from "next";
import { OpenAIApi } from "openai";

type Data = {
  result: string;
};

const openai = new OpenAIApi(configuration);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { query } = req.body;

  const response = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: `You are an incredible marketer, and a customer approaches you to write a very short and exciting marketing copy for them. This is the topic they would like a marketing copy for: '${query}.'\n\nThis is the short marketing copy you came up with:`,
    temperature: 0.85,
    max_tokens: 40,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  const suggestion = response.data?.choices?.[0].text;

  if (suggestion == undefined) throw new Error("No Suggestion");

  res.status(200).json({ result: suggestion });
}
