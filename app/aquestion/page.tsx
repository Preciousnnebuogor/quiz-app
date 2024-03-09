import { ListQuestion } from "./data";
export default function Question() {
  return (
    <div>
      <div>
        <p>What is the meaning of ECOWAS</p>
        <h1>
          a. Economic Community of West African States. <br />
          b. Economics Countries of West Africa Countries. <br />
          c. Economy Commiunties of West African Countries.
        </h1>
      </div>
      <div>
        <button>Next</button>
      </div>
      {ListQuestion.map((list, index) => {
        return (
          <div key={index}>
            <p>{list.question}</p>
            <p>{list.optionA}</p>
            <p>{list.optionB}</p>
            <p>{list.optionC}</p>
          </div>
        );
      })}
      <div></div>
    </div>
  );
}
