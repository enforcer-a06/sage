import 'dotenv/config'
import { ChatOpenAI } from '@langchain/openai'
import { HumanMessage } from '@langchain/core/messages'
import { StringOutputParser } from '@langchain/core/output_parsers'

const outputParser = new StringOutputParser()

const faildModel = new ChatOpenAI({
  apiKey: '123',
  configuration: {
    baseURL: 'https://api.gptsapi.net/v1',
  },
  maxRetries: 0,
})

// const message = await faildModel.invoke('你好')

const model = new ChatOpenAI({
  modelName: 'gpt-4o-mini',
  configuration: {
    baseURL: 'https://api.gptsapi.net/v1',
  },
})

const llmWithFallback = faildModel.withFallbacks({
  fallbacks: [model],
})

const chain = llmWithFallback.pipe(outputParser)

const message = await chain.invoke([new HumanMessage('你好')])

console.log(message)

// 你是一个的聊天机器人，你的任务是根据给定的文档回答用户问题，并且回答时仅根据给定的文档，尽可能回答
// 用户问题。如果你不知道，你可以回答“我不知道”。

// 这是文档:
// {docs}d

// 用户的提问是:
// {question}
