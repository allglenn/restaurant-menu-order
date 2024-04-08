import { StreamingTextResponse, LangChainStream, Message } from "ai";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { AIMessage, HumanMessage } from "langchain/schema";

export const runtime = "edge";

export async function POST(req: Request) {
  const { messages } = await req.json();
  const currentMessageContent = messages[messages.length - 1].content;

  const vectorSearch = await fetch("http://localhost:3000/api/vectorSearch", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: currentMessageContent,
  }).then((res) => res.json());

  const TEMPLATE = `
your are very polite waiter would take order from client a the table you need to know how much people are there and what they want to eat for each person,
you will need to ask the following questions:
- how many people are there?
- what would you like to eat?
- would you like to have a drink?
- would you like to have a dessert?
- would you like to have a coffee?
- would you like to have a tea?
then generate the order for the kitchen add smiley to the generate text.if your can't understand the client ask him to repeat the order.
  Context sections:
  ${JSON.stringify(vectorSearch)}

  Question: """
  ${currentMessageContent}
  """
  `;

  console.log(TEMPLATE);

  messages[messages.length -1].content = TEMPLATE;

  const { stream, handlers } = LangChainStream();

  const llm = new ChatOpenAI({
    modelName: "gpt-3.5-turbo",
    streaming: true,
  });

  llm
    .call(
      (messages as Message[]).map((m) =>
        m.role == "user"
          ? new HumanMessage(m.content)
          : new AIMessage(m.content)
      ),
      {},
      [handlers]
    )
    .catch(console.error);

  return new StreamingTextResponse(stream);
}
