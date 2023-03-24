import createHandler from "@/lib/handler/create-handler";

const handler = createHandler({
  post: (req, res) => {
    const body = req.body;

    res.status(200).json({ question: body });
  },
});

export default handler;
