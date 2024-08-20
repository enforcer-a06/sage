import 'dotenv/config'
import { OpenAIEmbeddings } from '@langchain/openai'
import { TextLoader } from 'langchain/document_loaders/fs/text'
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter'
import { MemoryVectorStore } from 'langchain/vectorstores/memory'

const embeddings = new OpenAIEmbeddings({
  model: 'text-embedding-3-small',
  configuration: {
    baseURL: 'https://api.gptsapi.net/v1',
  },
})

// // 1.embedding
// const loader = new TextLoader('./files/1.txt')
// const docs = await loader.load()
// const splitter = new RecursiveCharacterTextSplitter({
//   chunkSize: 100,
//   chunkOverlap: 20,
// })
// const splitDocs = await splitter.splitDocuments(docs)
// console.log(splitDocs)
// const res = await embeddings.embedQuery(splitDocs[0].pageContent)
// console.log(res)

// 2.MemoryVectorStore
const loader = new TextLoader('./files/1.txt')
const docs = await loader.load()
const splitter = new RecursiveCharacterTextSplitter({
  chunkSize: 25,
  chunkOverlap: 0,
})
const splitDocs = await splitter.splitDocuments(docs)
const vectorStore = new MemoryVectorStore(embeddings)
await vectorStore.addDocuments(splitDocs)
const retriever = vectorStore.asRetriever(2)
const res = await retriever.invoke('谁是王亮')
console.log(res)
