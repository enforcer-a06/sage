import 'dotenv/config'
import { ChatOpenAI } from '@langchain/openai'
import { StringOutputParser } from '@langchain/core/output_parsers'
import { PromptTemplate, PipelinePromptTemplate, SystemMessagePromptTemplate, HumanMessagePromptTemplate, ChatPromptTemplate } from '@langchain/core/prompts'

// //1.chatPrompt模版
// const translateInstructionTemplate = SystemMessagePromptTemplate.fromTemplate(`你是一个专业的翻译员，你的任务是将文本从{source_lang}翻译成{target_lang}。`)

// // console.log(translateInstructionTemplate)

// const userQuestionTemplate = HumanMessagePromptTemplate.fromTemplate('请翻译这句话：{text}')

// // console.log(userQuestionTemplate)

// const chatPrompt = ChatPromptTemplate.fromMessages([translateInstructionTemplate, userQuestionTemplate])

// // console.log(chatPrompt)

// const formatChatPrompt = await chatPrompt.formatMessages({
//   source_lang: '英文',
//   target_lang: '中文',
//   text: 'Hello, World!',
// })

// console.log(formatChatPrompt)

// //2. chatPrompt模版简化写法+调用
// const chatModel = new ChatOpenAI({
//   modelName: 'gpt-4o-mini',
//   configuration: {
//     baseURL: 'https://api.gptsapi.net/v1',
//   },
// })
// const outputParser = new StringOutputParser()

// const systemTemplate = `你是一个专业的翻译员，你的任务是将文本从{source_lang}翻译成{target_lang}。`
// const humanTemplate = `请翻译这句话：{text}`
// const chatPrompt = ChatPromptTemplate.fromMessages([
//   ['system', systemTemplate],
//   ['human', humanTemplate],
// ])

// const chain = chatPrompt.pipe(chatModel).pipe(outputParser)

// const res = await chain.invoke({
//   source_lang: '英文',
//   target_lang: '中文',
//   text: 'Hello, World!',
// })

// console.log(res)

// 3.组合多个prompt模版PipelinePromptTemplate
const getCurrentDateStr = () => {
  const date = new Date()
  return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`
}

const fullPrompt = PromptTemplate.fromTemplate(`
  你是一个智能管家，今天是{date}，你的主人的信息是：{info}。
  根据上下文，完成主人的需求。
  {task}
  `)

const datePrompt = PromptTemplate.fromTemplate(`{date}，现在是{period}`)
const periodPrompt = await datePrompt.partial({
  date: getCurrentDateStr,
})

const infoPrompt = PromptTemplate.fromTemplate('姓名是{name}, 性别是{gender}')

const taskPrompt = PromptTemplate.fromTemplate(`
  我想吃{period}的{food}。 
  再重复一遍我的信息：{info}。
  `)

const composedPrompt = new PipelinePromptTemplate({
  pipelinePrompts: [
    {
      name: 'date',
      prompt: periodPrompt,
    },
    {
      name: 'info',
      prompt: infoPrompt,
    },
    {
      name: 'task',
      prompt: taskPrompt,
    },
  ],
  finalPrompt: fullPrompt,
})

const formattedPrompt = await composedPrompt.format({
  period: '早上',
  name: '张三',
  gender: '男',
  food: '面条',
})

console.log(formattedPrompt)
