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

// // 4.转义
// const greetingPrompt = new PromptTemplate({
//   inputVariables: ['name', 'gender'],
//   template: 'hello ,{name} {{{gender}}} {{test}}',
// })

// console.log(greetingPrompt)

// const formattedGreetingPrompt = await greetingPrompt.format({
//   name: 'xg',
//   gender: 'sir',
// })

// console.log(formattedGreetingPrompt)

// // 5.简单方法
// const greetingPrompt = PromptTemplate.fromTemplate('hello ,{name} {gender}')
// console.log(greetingPrompt)

// const formattedGreetingPrompt = await greetingPrompt.format({
//   name: 'xg',
//   gender: 'sir',
// })

// console.log(formattedGreetingPrompt)

// // 6.部分传参 柯里化
// const greetingPrompt = new PromptTemplate({
//   inputVariables: ['name', 'gender'],
//   template: 'hello ,{name} {gender}',
// })
// console.log('0', greetingPrompt)

// const formattedGreetingPrompt1 = await greetingPrompt.partial({
//   name: 'xg',
// })

// console.log('1', formattedGreetingPrompt1)

// const formattedGreetingPrompt2 = await formattedGreetingPrompt1.format({
//   gender: 'sir',
// })

// console.log('2', formattedGreetingPrompt2)

// const formattedGreetingPrompt3 = await formattedGreetingPrompt1.format({
//   gender: 'madam',
// })

// console.log('3', formattedGreetingPrompt3)

// 7.使用动态参数
const sleep = ms => {
  return new Promise(resolve => setTimeout(resolve, ms))
}
const getAge = async (i = 0) => {
  await sleep(1000)
  return 18 + i
}

const greetingPrompt = new PromptTemplate({
  inputVariables: ['name', 'age'],
  template: 'my name is {name},i am {age} years old',
})

console.log('0', greetingPrompt)

const formattedGreetingPrompt1 = await greetingPrompt.partial({
  name: () => {
    return getAge(20)
  },
})

console.log('1', formattedGreetingPrompt1)

const formattedGreetingPrompt2 = await formattedGreetingPrompt1.format({
  age: getAge(10),
})

console.log('2', formattedGreetingPrompt2)
