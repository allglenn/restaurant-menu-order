import { promises as fsp } from "fs";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { MongoDBAtlasVectorSearch } from "langchain/vectorstores/mongodb_atlas";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { MongoClient } from "mongodb";
import "dotenv/config";


const client = new MongoClient(process.env.MONGODB_ATLAS_URI || ""); // MongoDB Atlas URI

async function vectorizeAndStore() {
  try {
    // Connect to MongoDB Atlas
    await client.connect();
    console.log("Connected successfully to MongoDB Atlas");

    const dbName = "menu-embeddings"; // Database name
    const collectionName = "embeddings"; // Collection name
    const collection = client.db(dbName).collection(collectionName); // Access the collection

    const docs_dir = "_assets/menu"; // Directory containing markdown files
    const fileNames = await fsp.readdir(docs_dir);

    for (const fileName of fileNames) {
      const document = await fsp.readFile(`${docs_dir}/${fileName}`, "utf8");
      console.log(`Vectorizing ${fileName}`);

      // Your document processing and vectorization logic
      const splitter = RecursiveCharacterTextSplitter.fromLanguage("markdown", {
        chunkSize: 500,
        chunkOverlap: 50,
      });
      const output = await splitter.createDocuments([document]);

      await MongoDBAtlasVectorSearch.fromDocuments(
        output,
        new OpenAIEmbeddings(),
        {
          collection,
          indexName: "default",
          textKey: "text",
          embeddingKey: "embedding",
        }
      );
    }
  } catch (error) {
    console.error("An error occurred:", error);
  } finally {
    await client.close();
    console.log("Disconnected from MongoDB Atlas");
  }
}

vectorizeAndStore().catch(console.error);
