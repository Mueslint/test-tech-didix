export type FormValues = {
  name: string;
  target: string | null;
};

export type StepType = {
  id: string;
  target: string | null;
  name: string;
};

export const testStepList: StepType[] = [
  {
    id: '0',
    target: '1',
    name: `I'm step one`,
  },
  {
    id: '1',
    target: '2',
    name: `I'm step two`,
  },
  {
    id: '2',
    target: null,
    name: `I'm step three`,
  },
];
