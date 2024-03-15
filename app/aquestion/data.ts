export interface IListQuestion {
  question: string;
  optionA: string;
  optionB: string;
  optionC: string;
  answerIndex: number;
  category: "HTML" | "CSS" | "JAVASCRIPT";
}

export const ListQuestion: IListQuestion[] = [
  {
    question: "What is the full meaning of HTML",
    optionA: "HyperText Markup Language.",
    optionB: "HyperTask Makeup Language.",
    optionC: "Hyperactive Test Markup Languages.",
    answerIndex: 1,
    category: "HTML",
  },

  {
    question: "Which of these statement are correct ",
    optionA: "Attributes are the properties that can be added to an HTML tag.",
    optionB: "Attributes are properties for designs.",
    optionC: "Attributes are development of making money.",
    answerIndex: 1,
    category: "HTML",
  },

  {
    question: "What is an element HTML?",
    optionA:
      "An element in HTML is a set of tags that defines all parts of a web page.",
    optionB:
      "An element in HTML do not consit of a start tag, content and end tag.",
    optionC:
      "An element in HTML is a set of tags that defines a specific part of a web page.",
    answerIndex: 3,
    category: "HTML",
  },

  {
    question: "What is HTML use for?",
    optionA: "HTML is used to define the appearance and layout of page.",
    optionB: "HTML is used to create the structure and content of a web page.",
    optionC: "HTML is used to map out element.",
    answerIndex: 2,
    category: "HTML",
  },

  {
    question: "Are the HTML tags and elements the same?",
    optionA: "NO.",
    optionB: "YES.",
    optionC: "Dedepending on the progamming language.",
    answerIndex: 1,
    category: "HTML",
  },

  {
    question: "What is the advantage of collapsing white space?",
    optionA:
      "It help to reduce the size of web pages and make them load very slow.",
    optionB: "They often used to display all kinds of symbols.",
    optionC:
      "It help to reduce the size of web pages and make them load faster.",
    answerIndex: 2,
    category: "HTML",
  },

  {
    question: "How do you display a table in an HTML webpage?",
    optionA: "The HTML <table> table is used to display data",
    optionB:
      "The HTML <table> table is used to display data in a horizontal format.",
    optionC:
      "The HTML <table> tag is used to display data in a tabular format.",
    answerIndex: 3,
    category: "HTML",
  },

  {
    question: "What is white space in HTML?",
    optionA:
      "White space helps in better organizing the content and tags, making them readable and easy to understand.",
    optionB:
      "White space helps in better functioning the content and tags, making them noticable and easy to understand.",
    optionC: "White space helps in destructuring of elements.",
    answerIndex: 1,
    category: "HTML",
  },

  {
    question: "How do you create hyperlink in HTML?",
    optionA:
      "We use anchor tag <tr> to create a hyperlink in HTML that links one page to another page.",
    optionB:
      "We use anchor tag <a> to create a hyperlink in HTML that links one page to another page.",
    optionC:
      "We use anchor tag <link> to create a hyperlink in HTML that links one page to another page.",
    answerIndex: 2,
    category: "HTML",
  },

  {
    question: "What is semantic HTML?",
    optionA:
      "Semantic HTML is a functional code, it is use to add data in the HTML markup",
    optionB: "Semantic HTML is a styling code, which is use for styling.",
    optionC: "Semantic HTML is a coding style, it is use of HTML markup.",
    answerIndex: 3,
    category: "HTML",
  },

  {
    question: "How do you handle events in HTML?",
    optionA: "Events can be handled using javascript.",
    optionB: "Events can be handled using react.",
    optionC: "Events can be handled usin tailwind.",
    answerIndex: 1,
    category: "HTML",
  },

  {
    question: "What is a form in HTML?",
    optionA: "Form in HTML is use for styling.",
    optionB:
      "A form is a set of input fields and other elements to collect user data.",
    optionC: "A form is used to fill in the data.",
    answerIndex: 2,
    category: "HTML",
  },

  {
    question: "What is the role of the title attribute in HTML?",
    optionA: "It provides additional information about a web page.",
    optionB: "It provides source of a codes for the element.",
    optionC: "It provides an additional information about an element.",
    answerIndex: 3,
    category: "HTML",
  },

  {
    question: "What is the role of the <meta> tag in HTML",
    optionA: "It helps to join two or more variables together.",
    optionB: "It provides additional information about a web page.",
    optionC: "It makes the HTML accessible",
    answerIndex: 2,
    category: "HTML",
  },

  {
    question: "How many times can an 'id' attribute be used in a page?",
    optionA: "Once.",
    optionB: "Twice.",
    optionC: "As many times as possible.",
    answerIndex: 1,
    category: "HTML",
  },

  {
    question: "What are the different types of lists in HTML?",
    optionA: "Ordered List, Unordered List and, Definition List.",
    optionB: "Ordered List, Category List, and Definition List.",
    optionC: "Definition List, Category List, and Attribute List.",
    answerIndex: 1,
    category: "HTML",
  },

  {
    question: "How do you add CSS styling in HTML?",
    optionA: "Inline CSS, Block CSS.",
    optionB: "Extenal style sheet, Format style sheet.",
    optionC: "Inline CSS, Extenal style sheet, Internal style sheet.",
    answerIndex: 2,
    category: "HTML",
  },

  {
    question: "What is the alt attribute in HTML?",
    optionA: "The alt atrribute is not needed in image tag.",
    optionB:
      "The alt attribute is used to display various elements that do not belong to image tag.",
    optionC:
      "It is use to dispaly a text in place of an image whenever the image cannot be loaded.",
    answerIndex: 3,
    category: "HTML",
  },

  {
    question: "How heading tags do we have in HTML?",
    optionA: "6.",
    optionB: "5.",
    optionC: "3.",
    answerIndex: 1,
    category: "HTML",
  },

  {
    question: "How do you create a nested web pages in HTML?",
    optionA: "we can create nested webpages in HTML using the built-in iframe.",
    optionB: "Nested web pages in HTML can be created using special imports.",
    optionC: "Web pages in HTML can be created through inline-block.",
    answerIndex: 1,
    category: "HTML",
  },

  {
    question: "What would happen if there is no text between the HTML tags?",
    optionA: "Everything will appear on the screen.",
    optionB: "Text of the previous tags will appear on the screen.",
    optionC: "Nothing will appear on the screen.",
    answerIndex: 3,
    category: "HTML",
  },

  {
    question: "What is SVG in HTML?",
    optionA: "HTML SVG is not a vector or raster but a processing unit",
    optionB: "HTML SVG is used to describe the vector or raster graphics.",
    optionC: "HTML SVG  is a field of study in HTML markup",
    answerIndex: 2,
    category: "HTML",
  },

  {
    question:
      "What is always a welcome page, and explains the purpose or topic of the site?",
    optionA: "Beginningpage.",
    optionB: "Homepage.",
    optionC: "Titlepage.",
    answerIndex: 2,
    category: "HTML",
  },

  {
    question: "Where do all items for the same website need to be saved?",
    optionA: "In the same folder.",
    optionB: "Where ever is fine.",
    optionC: "Below the tags.",
    answerIndex: 1,
    category: "HTML",
  },

  {
    question: "In HTML, how should values be consistently enclosed?",
    optionA: "Parenthesis.",
    optionB: "Quotation marks.",
    optionC: "Commas.",
    answerIndex: 2,
    category: "HTML",
  },

  {
    question:
      "Which of the following is an example of an empty element in HTML?",
    optionA: "</img>.",
    optionB: "<img></img>.",
    optionC: "<img/>.",
    answerIndex: 3,
    category: "HTML",
  },

  {
    question:
      "What is the term for an HTML element taht lacks a closing closing tag?",
    optionA: "Empty element.",
    optionB: "Tag.",
    optionC: "Closed element.",
    answerIndex: 1,
    category: "HTML",
  },

  {
    question:
      "In which section or part of an HTML document is meta tag typically located?",
    optionA: "The last page.",
    optionB: "Any page.",
    optionC: "The second page.",
    answerIndex: 2,
    category: "HTML",
  },

  {
    question:
      "<body/> Is this an opening tage or a closing tag in HTML element?",
    optionA: "Meta tag.",
    optionB: "Opening tag.",
    optionC: "Closing tag.",
    answerIndex: 3,
    category: "HTML",
  },

  {
    question:
      "<body> Is this an opening tage or a closing tag in HTML element?",
    optionA: "Title tag.",
    optionB: "Opening tag.",
    optionC: "Closing tag.",
    answerIndex: 2,
    category: "HTML",
  },

  {
    question: "<br/> What type of tag is this?",
    optionA: "Break tag.",
    optionB: "An opening tag.",
    optionC: "A title tag.",
    answerIndex: 1,
    category: "HTML",
  },

  {
    question: "Which of the following property sets the font size of text?",
    optionA: "Font-text.",
    optionB: "Font-size.",
    optionC: "font-weight.",
    answerIndex: 2,
    category: "CSS",
  },

  {
    question: "Which of the following property sets the font face to be used for text?",
    optionA: "Font-family.",
    optionB: "Font-size.",
    optionC: "Font-family.",
    answerIndex: 1,
    category: "CSS",
  },
  {
    question: "Which of the property infiuences the horizontal alignment of element, making it 'float' toward the left or right margin?",
    optionA: "Float-left.",
    optionB: "Float.",
    optionC: "Float-align.",
    answerIndex: 3,
    category: "CSS",
  },
  {
    question: "Which of the following property is used to round a border corners?",
    optionA: "Border-.",
    optionB: "Border-radius.",
    optionC: "Border-round.",
    answerIndex: 2,
    category: "CSS",
  },
  {
    question: "What is the full meaning of ECOWAS?",
    optionA: "string.",
    optionB: "number.",
    optionC: "yes.",
    answerIndex: 1,
    category: "CSS",
  },
  {
    question: "What is the full meaning of ECOWAS?",
    optionA: "string.",
    optionB: "number.",
    optionC: "yes.",
    answerIndex: 2,
    category: "CSS",
  },
  {
    question: "What is the full meaning of ECOWAS?",
    optionA: "string.",
    optionB: "number.",
    optionC: "yes.",
    answerIndex: 2,
    category: "CSS",
  },
  {
    question: "What is the full meaning of ECOWAS?",
    optionA: "string.",
    optionB: "number.",
    optionC: "yes.",
    answerIndex: 2,
    category: "CSS",
  },
  {
    question: "What is the full meaning of ECOWAS?",
    optionA: "string.",
    optionB: "number.",
    optionC: "yes.",
    answerIndex: 2,
    category: "CSS",
  },
  {
    question: "What is the full meaning of ECOWAS?",
    optionA: "string.",
    optionB: "number.",
    optionC: "yes.",
    answerIndex: 2,
    category: "CSS",
  },
  {
    question: "What is the full meaning of ECOWAS?",
    optionA: "string.",
    optionB: "number.",
    optionC: "yes.",
    answerIndex: 2,
    category: "CSS",
  },
  {
    question: "What is the full meaning of ECOWAS?",
    optionA: "string.",
    optionB: "number.",
    optionC: "yes.",
    answerIndex: 2,
    category: "CSS",
  },
  {
    question: "What is the full meaning of ECOWAS?",
    optionA: "string.",
    optionB: "number.",
    optionC: "yes.",
    answerIndex: 2,
    category: "CSS",
  },
  {
    question: "What is the full meaning of ECOWAS?",
    optionA: "string.",
    optionB: "number.",
    optionC: "yes.",
    answerIndex: 2,
    category: "CSS",
  },
  {
    question: "What is the full meaning of ECOWAS?",
    optionA: "string.",
    optionB: "number.",
    optionC: "yes.",
    answerIndex: 2,
    category: "CSS",
  },
  {
    question: "What is the full meaning of ECOWAS?",
    optionA: "string.",
    optionB: "number.",
    optionC: "yes.",
    answerIndex: 2,
    category: "CSS",
  },
  {
    question: "What is the full meaning of ECOWAS?",
    optionA: "string.",
    optionB: "number.",
    optionC: "yes.",
    answerIndex: 2,
    category: "CSS",
  },
  {
    question: "What is the full meaning of ECOWAS?",
    optionA: "string.",
    optionB: "number.",
    optionC: "yes.",
    answerIndex: 2,
    category: "CSS",
  },
  {
    question: "What is the full meaning of ECOWAS?",
    optionA: "string.",
    optionB: "number.",
    optionC: "yes.",
    answerIndex: 2,
    category: "CSS",
  },
  {
    question: "What is the full meaning of ECOWAS?",
    optionA: "string.",
    optionB: "number.",
    optionC: "yes.",
    answerIndex: 2,
    category: "CSS",
  },
  {
    question: "What is the full meaning of ECOWAS?",
    optionA: "string.",
    optionB: "number.",
    optionC: "yes.",
    answerIndex: 2,
    category: "CSS",
  },
  {
    question: "What is the full meaning of ECOWAS?",
    optionA: "string.",
    optionB: "number.",
    optionC: "yes.",
    answerIndex: 2,
    category: "CSS",
  },
  {
    question: "What is the full meaning of ECOWAS?",
    optionA: "string.",
    optionB: "number.",
    optionC: "yes.",
    answerIndex: 2,
    category: "CSS",
  },
  {
    question: "What is the full meaning of ECOWAS?",
    optionA: "string.",
    optionB: "number.",
    optionC: "yes.",
    answerIndex: 2,
    category: "CSS",
  },
  {
    question: "What is the full meaning of ECOWAS?",
    optionA: "string.",
    optionB: "number.",
    optionC: "yes.",
    answerIndex: 2,
    category: "CSS",
  },
  {
    question: "What is the full meaning of ECOWAS?",
    optionA: "string.",
    optionB: "number.",
    optionC: "yes.",
    answerIndex: 2,
    category: "CSS",
  },
  {
    question: "What is the full meaning of ECOWAS?",
    optionA: "string.",
    optionB: "number.",
    optionC: "yes.",
    answerIndex: 2,
    category: "CSS",
  },
  {
    question: "What is the full meaning of ECOWAS?",
    optionA: "string.",
    optionB: "number.",
    optionC: "yes.",
    answerIndex: 2,
    category: "CSS",
  },
  {
    question: "What is the full meaning of ECOWAS?",
    optionA: "string.",
    optionB: "number.",
    optionC: "yes.",
    answerIndex: 2,
    category: "CSS",
  },
  {
    question: "What is the full meaning of ECOWAS?",
    optionA: "string.",
    optionB: "number.",
    optionC: "yes.",
    answerIndex: 2,
    category: "CSS",
  },

  {
    question: "What is the full meaning of ECOWAS?",
    optionA: "string.",
    optionB: "number.",
    optionC: "yes.",
    answerIndex: 2,
    category: "JAVASCRIPT",
  },
  {
    question: "What is the full meaning of ECOWAS?",
    optionA: "string.",
    optionB: "number.",
    optionC: "yes.",
    answerIndex: 2,
    category: "JAVASCRIPT",
  },
  {
    question: "What is the full meaning of ECOWAS?",
    optionA: "string.",
    optionB: "number.",
    optionC: "yes.",
    answerIndex: 2,
    category: "JAVASCRIPT",
  },
];
