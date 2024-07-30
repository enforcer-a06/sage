import 'dotenv/config'
import { ChatOpenAI } from '@langchain/openai'
import { HumanMessage } from '@langchain/core/messages'
import { StringOutputParser } from '@langchain/core/output_parsers'

const outputParser = new StringOutputParser()

const model = new ChatOpenAI({
  modelName: 'gpt-4o-mini',
  configuration: {
    baseURL: 'https://api.gptsapi.net/v1',
  },
})

const chain = model.pipe(outputParser)

// const message = await chain.invoke([new HumanMessage('你好')])

// const message = await chain.batch([[new HumanMessage('你好')]])

// const message = await chain.batch([[new HumanMessage('你好')], [new HumanMessage('你是谁')]])

// console.log(message);

const stream = await chain.stream([new HumanMessage('你好')])
// const stream = await chain.streamLog([new HumanMessage('你好')])

for await (const chunk of stream) {
  console.log(chunk)
}
