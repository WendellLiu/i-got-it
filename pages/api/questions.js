import createHandler from "@/lib/handler/create-handler";
import { Configuration, OpenAIApi } from "openai";

const token = process.env.LOCAL_OPEN_AI_TOKEN;

const configuration = new Configuration({
  apiKey: token,
});

const generatePrompt = (
  article,
  n
) => `Generate ${n} questions based on the following article
${article}
`;

const openai = new OpenAIApi(configuration);

const handler = createHandler({
  post: async (req, res) => {
    const body = req.body;
    const { article, nOfQuestions = 5 } = body;

    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "user", content: generatePrompt(article, nOfQuestions) },
      ],
    });

    const message = completion.data.choices[0].message;

    res.status(200).json({ message });
  },
});

export default handler;
