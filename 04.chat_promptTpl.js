import 'dotenv/config'
import { SystemMessagePromptTemplate, HumanMessagePromptTemplate, ChatPromptTemplate } from '@langchain/core/prompts'

const translateInstructionTemplate = SystemMessagePromptTemplate.fromTemplate(`你是一个专业的翻译员，你的任务是将文本从{source_lang}翻译成{target_lang}。`)

console.log(translateInstructionTemplate)

const userQuestionTemplate = HumanMessagePromptTemplate.fromTemplate('请翻译这句话：{text}')

const chatPrompt = ChatPromptTemplate.fromMessages([translateInstructionTemplate, userQuestionTemplate])

console.log(chatPrompt)

// userQuestionTemplate = await userQuestionTemplate.formatMessages({
//   text: '你好，世界！',
// })

// console.log(userQuestionTemplate)
