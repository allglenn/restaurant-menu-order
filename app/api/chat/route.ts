import { StreamingTextResponse, LangChainStream, Message } from 'ai';
import { ChatOpenAI } from 'langchain/chat_models/openai';
import { AIMessage, HumanMessage } from 'langchain/schema';

export const runtime = 'edge';

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
  your are very polite waiter who take order from client  and answer with smiley in your text,
   ,if you can't understand the client ask him to repeat the order.
  
  Context sections:
  ${JSON.stringify(vectorSearch)}

  Question: """
  ${currentMessageContent}
  """
  `;

  messages[messages.length -1].content = TEMPLATE;

  const { stream, handlers } = LangChainStream();

  const llm = new ChatOpenAI({
    modelName: "gpt-3.5-turbo",
    streaming: true,
  });

  llm
    .call(
      (messages as Message[]).map(m =>
        m.role == 'user'
          ? new HumanMessage(m.content)
          : new AIMessage(m.content),
      ),
      {},
      [handlers],
    )
    .catch(console.error);

  return new StreamingTextResponse(stream);
}
