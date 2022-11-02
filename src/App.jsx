import Section from "components/Section";
import AppContainer from "components/AppContainer";
import Select from 'components/Select';

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

export const App = () => {
  return (
    <AppContainer>
      <Section>
        <Select task={taskSelect} />
      </Section>
    </AppContainer>
  );
};
