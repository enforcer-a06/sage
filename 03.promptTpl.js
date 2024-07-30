import 'dotenv/config'
import { PromptTemplate } from '@langchain/core/prompts'

// // 1.基础模版
// const greetingPrompt = new PromptTemplate({
//   inputVariables: [],
//   template: 'hello world',
// })

// console.log(greetingPrompt)

// const formattedGreetingPrompt = await greetingPrompt.format()

// console.log(formattedGreetingPrompt)

// // 2.含变量
// const greetingPrompt = new PromptTemplate({
//   inputVariables: ['name'],
//   template: 'hello ,{name}',
// })

// console.log(greetingPrompt)

// const formattedGreetingPrompt = await greetingPrompt.format({
//   name: 'xg',
// })

// console.log(formattedGreetingPrompt)

// // 3.多变量
// const greetingPrompt = new PromptTemplate({
//   inputVariables: ['name', 'gender'],
//   template: 'hello ,{name} {gender}',
// })

// console.log(greetingPrompt)

// const formattedGreetingPrompt = await greetingPrompt.format({
//   name: 'xg',
//   gender: 'sir',
// })

// console.log(formattedGreetingPrompt)

// 4.转义
const greetingPrompt = new PromptTemplate({
  inputVariables: ['name', 'gender'],
  template: 'hello ,{name} {{{gender}}} {{test}}',
})

console.log(greetingPrompt)

const formattedGreetingPrompt = await greetingPrompt.format({
  name: 'xg',
  gender: 'sir',
})

console.log(formattedGreetingPrompt)
