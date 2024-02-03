import * as p from '@clack/prompts';
import chalk from 'chalk';
import ora from 'ora';

let total = 0;

async function askQuestion(question, answerArray, correctAnswerIndex) {
  const options = [];

  answerArray.forEach((answer) => {
    options.push({ value: answer, label: answer }); // Fix the typo here (lable to label)
  });

  const answer = await p.select({
    message: question,
    initialValue: '1',
    options: options,
  });

  if (answer === answerArray[correctAnswerIndex]) {
    total++;
  }
  // spinner.succeed('Question loaded');
}

class Question {
  constructor(question, answerArray, correctAnswerIndex) {
    this.question = question;
    this.answerArray = answerArray; // Fix: Change 'answer' to 'answerArray'
    this.correctAnswerIndex = correctAnswerIndex;
  }
}

async function main() {
  p.intro(chalk.bgGreen.white.bold('Welcome to the app'));

  const question1 = new Question('What is the capital of Nepal?', ['Kathmandu', 'Pokhara', 'Mustang'], 0);
  const question2 = new Question('What is the capital of India?', ['Mumbai', 'New Delhi', 'Mustang'], 1);
  const question3 = new Question('What is the capital of USA?', ['Washington D.C.', 'New York', 'Los Angeles'], 0);
  const question4 = new Question('What is the capital of Australia?', ['Sydney', 'Canberra', 'Melbourne'], 1);
  const question5 = new Question('What is the capital of Japan?', ['Kyoto', 'Osaka', 'Tokyo'], 2);
  const question6 = new Question('What is the capital of China?', ['Shanghai', 'Beijing', 'Hong Kong'], 1);
  const question7 = new Question('What is the capital of South Korea?', ['Seoul', 'Busan', 'Incheon'], 0);
  const question8 = new Question('What is the capital of France?', ['Marseille', 'Paris', 'Lyon'], 1);
  const question9 = new Question('What is the capital of Germany?', ['Berlin', 'Hamburg', 'Munich'], 0);
  const question10 = new Question('What is the capital of Italy?', ['Rome', 'Milan', 'Naples'], 0);
  const spinner = ora('Loading questions').start();
  // Call askQuestion for each question
  await askQuestion(question1.question, question1.answerArray, question1.correctAnswerIndex);
  await askQuestion(question2.question, question2.answerArray, question2.correctAnswerIndex);
  await askQuestion(question3.question, question3.answerArray, question3.correctAnswerIndex);
  await askQuestion(question4.question, question4.answerArray, question4.correctAnswerIndex);
  await askQuestion(question5.question, question5.answerArray, question5.correctAnswerIndex);
  await askQuestion(question6.question, question6.answerArray, question6.correctAnswerIndex);
  await askQuestion(question7.question, question7.answerArray, question7.correctAnswerIndex);
  await askQuestion(question8.question, question8.answerArray, question8.correctAnswerIndex);
  await askQuestion(question9.question, question9.answerArray, question9.correctAnswerIndex);
  await askQuestion(question10.question, question10.answerArray, question10.correctAnswerIndex);
  spinner.succeed('Quiz completed!');
  const url = "https://static3.depositphotos.com/1007162/256/i/950/depositphotos_2564880-stock-photo-throwing-shit.jpg";
  console.log(chalk.bgBlueBright.gray.bold('Total correct answers:', total));
  if(total === 10){
    console.log(`${chalk.bgGreenBright.black.bold(" Congratulations! You got all the answers correct' Click on this link for prize:")} ${url}`);
  }

  p.outro(chalk.bgRed.white.bold('Goodbye!'));
}

main();
