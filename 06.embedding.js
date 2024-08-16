import { Document } from 'langchain/document'
import { TextLoader } from 'langchain/document_loaders/fs/text'
import { PDFLoader } from '@langchain/community/document_loaders/fs/pdf'

// // 1.基本示例
// const test = new Document({ pageContent: 'test text', metadata: { source: 'ABC Title' } })
// console.log(TextLoader)

// // 2.加载文本文档
// const loader = new TextLoader('./1.txt')
// const docs = await loader.load()
// console.log(docs)

// 3.加载pdf文档
const loader = new PDFLoader('./1.pdf')
const pdfs = await loader.load()
console.log(pdfs)
