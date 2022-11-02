import Section from "components/Section";
import AppContainer from "components/AppContainer";
import Select from 'components/Select';
import CorrectOrder from 'components/CorrectOrder';

let taskSelect = {
  taskName: "Choose the correct form to complete the following sentences.",
  questions: [
    {
      id: 1,
      part1: "First, I wrote a letter. Second, I showed him the letter. ⇒ I showed him a letter that I",
      part2: ".",
      answers: [
        { id: 0, answer: '' },
        { id: 1, answer: 'wrote' },
        { id: 2, answer: '\'d written' },
      ],
      correct: '\'d written',
    },
    {
      id: 2,
      part1: "First, I wrote a letter. Second, I showed him the letter. ⇒ I wrote a letter and a few days later I",
      part2: "it to him.",
      answers: [
        { id: 0, answer: '' },
        { id: 1, answer: 'showed' },
        { id: 2, answer: '\'d shown' },
      ],
      correct: 'showed',
    },
    {
      id: 3,
      part1: "saddsadasdsdsaddsadasd, I wrote a letter. Second, I showed him the letter. ⇒ I wrote a letter and a few days later I",
      part2: "it to him.",
      answers: [
        { id: 0, answer: '' },
        { id: 1, answer: 'q' },
        { id: 2, answer: 'w' },
        { id: 3, answer: 'e' },
      ],
      correct: 'e',
    }
  ]
};
let taskCorrectOrder = {
  taskName: "Put the phrases in the correct order",
  questions: [
    {
      id: 1,
      pieces: [
        { id: 1, text: 'How much' },
        { id: 2, text: 'are' },
        { id: 3, text: 'these' },
        { id: 4, text: 'trainers?' },
      ],
      correct: "How much are these trainers?"
    },
    {
      id:2,
      pieces: [
        { id: 1, text: 'What' },
        { id: 2, text: 'is' },
        { id: 3, text: 'your' },
        { id: 4, text: 'name?' },
      ],
      correct: "What is your name?"
    }
  ]
};

export const App = () => {
  return (
    <AppContainer>
      <Section>
        <CorrectOrder task={taskCorrectOrder} />
      </Section>
      <Section>
        <Select task={taskSelect} />
      </Section>
    </AppContainer>
  );
};
