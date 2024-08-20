import 'dotenv/config'
import { OpenAIEmbeddings } from '@langchain/openai'
import { TextLoader } from 'langchain/document_loaders/fs/text'
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter'
import { FaissStore } from '@langchain/community/vectorstores/faiss'
import 'faiss-node'
// const embeddings = new OpenAIEmbeddings({
//   model: 'text-embedding-3-small',
//   configuration: {
//     baseURL: 'https://api.gptsapi.net/v1',
//   },
// })

// const work = async () => {
//   const loader = new TextLoader('./files/1.txt')
//   const docs = await loader.load()
//   const splitter = new RecursiveCharacterTextSplitter({
//     chunkSize: 25,
//     chunkOverlap: 0,
//   })
//   const splitDocs = await splitter.splitDocuments(docs)
//   const vectorStore = await FaissStore.fromDocuments(splitDocs, embeddings)
//   const directory = '../db/test'
//   await vectorStore.save(directory)
// }
// work()
// const directory = '../db/test'
// const embeddings = new OpenAIEmbeddings()
// const vectorStore = await FaissStore.load(directory, embeddings)
// const retriever = vectorStore.asRetriever(2)
// const res = await retriever.invoke('谁是王亮')
// console.log(res)
