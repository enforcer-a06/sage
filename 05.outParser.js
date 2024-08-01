import 'dotenv/config'
import { ChatOpenAI } from '@langchain/openai'
import { HumanMessage } from '@langchain/core/messages'
import { StringOutputParser } from '@langchain/core/output_parsers'

const chatModel = new ChatOpenAI({
  modelName: 'gpt-4o-mini',
  configuration: {
    baseURL: 'https://api.gptsapi.net/v1',
  },
})

const parser = new StringOutputParser()

// invoke的默认响应结构是一个大json可阅读性不好,所以利用StringOutputParser进行解析

const chain = chatModel.pipe(parser)
const res = await chain.invoke([new HumanMessage('你好')])

console.log(res)
