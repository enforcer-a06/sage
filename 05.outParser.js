import 'dotenv/config'
import { ChatOpenAI } from '@langchain/openai'
import { HumanMessage } from '@langchain/core/messages'
import { PromptTemplate } from '@langchain/core/prompts'
import { StringOutputParser, StructuredOutputParser } from '@langchain/core/output_parsers'
import { HttpsProxyAgent } from 'https-proxy-agent'

const httpAgent = new HttpsProxyAgent('http://127.0.0.1:7890')
// // const chatModel = new ChatOpenAI({
// //   model: 'gpt-4o-mini',
// // })
const chatModel = new ChatOpenAI(
  {
    model: 'gpt-4o-mini',
    //   configuration: {
    //     baseURL: 'https://api.gptsapi.net/v1',
    //   },
  },
  {
    httpAgent: httpAgent,
  }
)

// // // 1.StringOutputParser
// // // invoke的默认响应结构是一个大json可阅读性不好,所以利用StringOutputParser进行解析
// // const parser = new StringOutputParser()

// // const chain = chatModel.pipe(parser)
// // const res = await chain.invoke([new HumanMessage('你好')])

// // console.log(res)

// // 2.StructuredOutputParser
const parser = StructuredOutputParser.fromNamesAndDescriptions({
  answer: '用户问题的答案',
  evidence: '你回答用户问题所依据的答案',
  confidence: '问题答案的可信度评分，格式是百分数',
})
// // console.log(parser.getFormatInstructions())
// const prompt = PromptTemplate.fromTemplate('尽可能的回答用户的问题 \n{instructions} \n{question}')
// const model = new ChatOpenAI()

// const chain = prompt.pipe(chatModel).pipe(parser)
// const res = await chain.invoke({
//   question: '蒙娜丽莎的作者是谁？是什么时候绘制的',
//   instructions: parser.getFormatInstructions(),
// })

console.log(parser.getFormatInstructions())

// // 3.List Output Parser
