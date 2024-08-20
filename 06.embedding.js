import 'dotenv/config'
import 'cheerio'
import { Document } from 'langchain/document'
import { TextLoader } from 'langchain/document_loaders/fs/text'
import { DirectoryLoader } from 'langchain/document_loaders/fs/directory'
import { PDFLoader } from '@langchain/community/document_loaders/fs/pdf'
import { GithubRepoLoader } from '@langchain/community/document_loaders/web/github'
import { CheerioWebBaseLoader } from '@langchain/community/document_loaders/web/cheerio'
import { SerpAPILoader } from '@langchain/community/document_loaders/web/serpapi'

import ignore from 'ignore'

// // 1.基本示例
// const test = new Document({ pageContent: 'test text', metadata: { source: 'ABC Title' } })
// console.log(TextLoader)

// // 2.加载文本文档
// const loader = new TextLoader('./files/1.txt')
// const docs = await loader.load()
// console.log(docs)

// // 3.加载pdf文档
// const loader = new PDFLoader('./files/1.pdf')
// // const loader = new PDFLoader('./1.pdf', { splitPages: false })
// const pdfs = await loader.load()
// console.log(pdfs)

// // 4.加载文件夹
// const loader = new DirectoryLoader('./files', {
//   '.pdf': path => new PDFLoader(path),
//   '.txt': path => new TextLoader(path),
// })
// const docs = await loader.load()
// console.log(docs)

// 5.github loader
const loader = new GithubRepoLoader('https://github.com/RealKai42/qwerty-learner', {
  branch: 'master',
  recursive: false,
  unknown: 'warn', // ??
  ignorePaths: ['*.md', 'yarn.lock', '*.json'],
  //   accessToken: process.env['GITHUB_TOKEN'],
})
const codes = await loader.load()
console.log(codes)

// // 6.webloader
// const loader = new CheerioWebBaseLoader('https://kaiyi.cool/blog/github-copilot')
// // const loader = new CheerioWebBaseLoader('https://kaiyi.cool/blog/github-copilot', {
// //   selector: 'h3',
// // })
// const docs = await loader.load()
// console.log(docs)

// // 7.Search API
// const apiKey = process.env['SERP_KEY']
// const question = '什么 github copliot'
// const loader = new SerpAPILoader({ q: question, apiKey })
// const docs = await loader.load()
// console.log(docs)
