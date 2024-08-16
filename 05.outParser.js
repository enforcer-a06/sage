import 'dotenv/config'
import { z } from 'zod'
import { ChatOpenAI } from '@langchain/openai'
import { HumanMessage } from '@langchain/core/messages'
import { PromptTemplate } from '@langchain/core/prompts'
import { StringOutputParser, StructuredOutputParser, CommaSeparatedListOutputParser } from '@langchain/core/output_parsers'
import { OutputFixingParser } from 'langchain/output_parsers'
import { HttpsProxyAgent } from 'https-proxy-agent'

// const httpAgent = new HttpsProxyAgent('http://127.0.0.1:7890')

const chatModel = new ChatOpenAI(
  {
    model: 'gpt-4o-mini',
    configuration: {
      baseURL: 'https://api.gptsapi.net/v1',
    },
  },
  {
    // httpAgent
  }
)

// // 1.StringOutputParser
// // invoke的默认响应结构是一个大json可阅读性不好,所以利用StringOutputParser进行解析
// const parser = new StringOutputParser()
// const chain = chatModel.pipe(parser)
// const res = await chain.invoke([new HumanMessage('你好')])
// console.log(res)

// // 2.StructuredOutputParser
// // 返回结构化的JSON数据结构
// const parser = StructuredOutputParser.fromNamesAndDescriptions({
//   answer: '用户问题的答案',
//   evidence: '你回答用户问题所依据的答案',
//   confidence: '问题答案的可信度评分，格式是百分数',
// })
// // // console.log(parser.getFormatInstructions())
// const prompt = PromptTemplate.fromTemplate('尽可能的回答用户的问题 \n{instructions} \n{question}')
// const chain = prompt.pipe(chatModel).pipe(parser)
// const res = await chain.invoke({
//   question: '蒙娜丽莎的作者是谁？是什么时候绘制的',
//   instructions: parser.getFormatInstructions(),
// })
// console.log(res)

// // 3.List Output Parser
// // 以列表的形式返回结果
// const parser = new CommaSeparatedListOutputParser()
// // console.log(parser.getFormatInstructions())
// const prompt = PromptTemplate.fromTemplate('列出3个 {country} 的著名的互联网公司.\n{instructions}')
// const chain = prompt.pipe(chatModel).pipe(parser)
// const res = await chain.invoke({ country: '美国', instructions: parser.getFormatInstructions() })
// console.log(res)

// // 4.Auto Fix Parser
// const schema = z.object({
//   answer: z.string().describe('用户问题的答案'),
//   confidence: z.number().min(0).max(100).describe('问题答案的可信度评分，满分 100'),
// })
// const parser = StructuredOutputParser.fromZodSchema(schema)
// const prompt = PromptTemplate.fromTemplate('尽可能的回答用户的问题 \n{instructions} \n{question}')
// const chain = prompt.pipe(chatModel).pipe(parser)

// // console.log(parser.getFormatInstructions())
// const res = await chain.invoke({
//   question: '蒙娜丽莎的作者是谁？是什么时候绘制的',
//   instructions: parser.getFormatInstructions(),
// })

// console.log(res)

// // 5. OutputFixingParser
// // 修复输出的解析器,token很大 按需使用吧
// const schema = z.object({
//   answer: z.string().describe('用户问题的答案'),
//   confidence: z.number().min(0).max(100).describe('问题答案的可信度评分，满分 100'),
// })
// const parser = StructuredOutputParser.fromZodSchema(schema)
// const wrongOutput = {
//   answer: '蒙娜丽莎的作者是达芬奇，大约在16世纪初期（1503年至1506年之间）开始绘制。',
//   sources: '90%',
// }

// const fixParser = OutputFixingParser.fromLLM(chatModel, parser)
// const output = await fixParser.parse(JSON.stringify(wrongOutput))
// console.log(output)
