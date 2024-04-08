import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { MongoDBAtlasVectorSearch } from "langchain/vectorstores/mongodb_atlas";
import mongoClientPromise from '@/app/lib/mongodb';

export async function POST(req: Request) {
  const client = await mongoClientPromise;
  const dbName = "menu-embeddings";
  const collectionName = "embeddings";
  const collection = client.db(dbName).collection(collectionName);
  
  const question = await req.text();
  console.log(question);

  const vectorStore = new MongoDBAtlasVectorSearch(
    new OpenAIEmbeddings({
      modelName: 'text-embedding-ada-002',
      stripNewLines: true,
    }), {
    collection,
    indexName: "default",
    textKey: "text", 
    embeddingKey: "embedding",
  });

  const retriever = vectorStore.asRetriever({
    searchType: "mmr",// "mmr" or "dense"
    searchKwargs: {
      fetchK: 20, // number of documents to fetch
      lambda: 0.1, // MMR lambda parameter (0.0 for pure relevance, 1.0 for pure diversity)
    },
  });
  
  const retrieverOutput = await retriever.getRelevantDocuments(question);
  
  return Response.json(retrieverOutput);
}
