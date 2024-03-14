interface IListQuestion {
  question: string;
  optionA: string;
  optionB: string;
  optionC: string;
  answerIndex: number;
  category: "Art"| "Science"| "Social";

}

export const ListQuestion: IListQuestion[] = [
  {
    question: "What is the full meaning of ECOWAS",
    optionA: "Economic Community of West African States.",
    optionB: "Economics Countries of West Africa Countries.",
    optionC: "Economy Commiunties of West African Countries.",
    answerIndex: 1,
    category: "Art",
    
  },

  {
    question: "What is the full meaning of ECOWAS",
    optionA: "Economic Community of West African States.",
    optionB: "Economics Countries of West Africa Countries.",
    optionC: "Economy Commiunties of West African Countries.",
    answerIndex: 1,
    category: "Art",
    
  },

  {
    question: "Add 23 and 2",
    optionA: "29",
    optionB: "34",
    optionC: "25",
    answerIndex: 3,
    category: "Art",
  },

  {
    question: "Add 23 and 2",
    optionA: "29",
    optionB: "34",
    optionC: "25",
    answerIndex: 3,
    category: "Art",
  },

  {
    question: "What is the full meaning of v",
    optionA: "jiy",
    optionB: "vivian",
    optionC: "cow",
    answerIndex: 2,
    category: "Science",
  },

  {
    question: "What is the my name",
    optionA: "precios",
    optionB: "nnebugor",
    optionC: "go",
    answerIndex: 2,
    category: "Science",
  },

  {
    question: "What is the full meaning of GOAT",
    optionA: "Greatest Of Them All",
    optionB: "food",
    optionC: "come",
    answerIndex: 1,
    category: "Social",
  },

  {
    question: "What is the full meaning of ECOWAS",
    optionA: "string",
    optionB: "number",
    optionC: "yes",
    answerIndex: 2,
    category: "Social",
  },
];
