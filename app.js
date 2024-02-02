import * as p from '@clack/prompts';
import chalk from 'chalk';
import {intro, outro} from '@clack/prompts';
let total = 0;
async function askQuestion(question, answerArray, correctAnswerIndex){
  const options = [];
  
  answerArray.forEach((answer)=> {
    options.push({value:answer, lable: answer});
  });
  const answer = await p.select({
    message: question,
    initialValue: '1',
    options: options,
  })
  if(answer=== answerArray[correctAnswerIndex]){
    total++;
  }

}
class Question{
  constructor(question, answerArray, correctAnswerIndex){
    this.question = question;
    this.answer = answerArray;
    this.correctAnswerIndex = correctAnswerIndex;
  }

}
async function main(){ 
  p.intro(chalk.bgGreen.white.bold('Welcome to the app'));
  const quesiton1 = new Question('What is the capital of Nepal?', ['Kathmandu', 'Pokhara', 'Mustang'], 0);
  const quesiton2 = new Question('What is the capital of India?', ['Mumbai', 'New Delhi', 'Mustang'], 1);
  const quesiton3 = new Question('What is the capital of USA?', ['Washington DC', 'New York', 'Las Vegas'], 0);
  const quesiton4 = new Question('What is the capital of China?', ['Shanghai', 'Beijing', 'Hong Kong'], 1);
  const quesiton5 = new Question('What is the capital of Japan?', ['Tokyo', 'Kyoto', 'Osaka'], 0);
  const quesiton6 = new Question('What is the capital of Australia?', ['Sydney', 'Melbourne', 'Canberra'], 2);
  const quesiton7 = new Question('What is the capital of Brazil?', ['Rio De Janeiro', 'Sao Paulo', 'Brasilia'], 2);
  const quesiton8 = new Question('What is the capital of Canada?', ['Toronto', 'Vancouver', 'Ottawa'], 2);
  const quesiton9 = new Question('What is the capital of France?', ['Paris', 'Marseille', 'Lyon'], 0);
  const quesiton10 = new Question('What is the capital of Germany?', ['Berlin', 'Munich', 'Hamburg'], 0);
  const quesiton11 = new Question('What is the capital of Italy?', ['Rome', 'Milan', 'Naples'], 0);
p.outro(chalk.bgRed.white.bold('Goodbye!'));

}
main();
askQuestion();
