import Section from "components/Section";
import AppContainer from "components/AppContainer";
import Select from 'components/Select';
import Radio from 'components/Radio';
import Input from 'components/Input';
import CorrectOrder from 'components/CorrectOrder';
import MultipleChoiceGap from 'components/MultipleChoiceGap';

const taskSelect = {
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

const taskRadio = {
  taskName: "Choose the correct option to complete the following sentences.",
  questions: [
    {
      id: 4324321,
      question: "First, I wrote a letter. Second, I showed him the letter. ⇒ I showed him a letter that I",
      answers: [
        { id: 154, answer: 'wrote' },
        { id: 2432, answer: '\'d written' },
      ],
      correct: '\'d written',
    },
    {
      id: 33332,
      question: "First, I wrote a letter. Second, I showed him the letter. ⇒ I wrote a letter and a few days later I",
      answers: [
        { id: 1654, answer: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis labore, repellendus eum, laboriosam illo, accusamus doloremque sequi cum itaque quidem ullam aperiam ipsa possimus officia consequuntur molestiae consectetur aliquam eos.' },
        { id: 24, answer: '\'d shown' },
      ],
      correct: 'showed',
    },
    {
      id: 43256453,
      question: "saddsadasdsdsaddsadasd, I wrote a letter. Second, I showed him the letter. ⇒ I wrote a letter and a few days later I",
      answers: [
        { id: 545671, answer: 'q' },
        { id: 892, answer: 'w' },
        { id: 873, answer: 'e' },
      ],
      correct: 'q',
    },
    {
      id: 543,
      question: "saddsadasdsdsaddsadasd, I wrote a letter. Second, I showed him the letter. ⇒ I wrote a letter and a few days later I",
      answers: [
        { id: 7511, answer: 'q' },
        { id: 22222, answer: 'w' },
        { id: 36789799999, answer: 'e' },
        { id: 4764645, answer: 'd' },
      ],
      correct: 'e',
    }
  ]
};

const taskCorrectOrder = {
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
      correct: "What is yourrtryrjuymuk name?"
    },
    {
      id:3,
      pieces: [
        { id: 1, text: 'What' },
        { id: 2, text: 'is' },
        { id: 3, text: 'your' },
        { id: 4, text: 'qwe?' },
        { id: 5, text: 'asd?' },
        { id: 6, text: 'zxc?' },
      ],
      correct: "What is your name?"
    }
  ]
};

const taskMultipleChoiceGap = {
  taskName: "Fulfill the gaps with the correct phrase",
  variants: [
    {id:1, text:"size 11 color black"},
    {id:2, text:"How much are they"},
    {id:3, text:"no thanks"},
    {id:4, text:"Have you got"},
  ],
  questions: [
    {
      id: 1,
      part1: " I need trainers",
      part2: ", do you have it",
      correct: "size 11 color black"
    },
    {
      id: 2,
      part1: "We have color white. I will bring. Ok? ",
      part2: "I hate wite color",
      correct: "no thanks"
    },
    {
      id: 3,
      part1: "Wht about this pair",
      part2: "11$",
      correct: "How much are they"
    },
    {
      id: 4,
      part1: "",
      part2: "no we don't have it",
      correct: "Have you got"
    },
    
  ]
};

const taskInput = {
  taskName: "Write correct phrases in the gaps",
  questions: [
    {
      id: 1,
      part1: " I need trainers",
      part2: ", do you have it",
      correct: "size 11 color black"
    },
    {
      id: 2,
      part1: "We have color white. I will bring. Ok? ",
      part2: "I hate wite color",
      correct: "no thanks"
    },
    {
      id: 3,
      part1: "Wht about this pair",
      part2: "11$",
      correct: "How much are they"
    },
    {
      id: 4,
      part1: "",
      part2: "no we don't have it",
      correct: "Have you got"
    },
    
  ]
};

export const App = () => {
  return (
    <AppContainer>
      <Section>
        <Radio task={taskRadio} />
      </Section>
      <Section>
        <Input task={taskInput} />
      </Section>
      <Section>
        <MultipleChoiceGap task={taskMultipleChoiceGap} />
      </Section>
      <Section>
        <CorrectOrder task={taskCorrectOrder} />
      </Section>
      <Section>
        <Select task={taskSelect} />
      </Section>
    </AppContainer>
  );
};
