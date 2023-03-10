import { useState } from "react";

import { Props } from ".";

const AddButton: React.FC<Props> = ({ sendMessage }) => {
  const [count, setCount] = useState<number>(0);

  const addButton = () => {
    setCount(count + 1);
    sendMessage(`Button ${count + 1} added`);
  };

  const handleClick = (index: number) => {
    sendMessage(`Button ${index + 1} clicked`);
  };

  return (
    <div className="add-button-container">
      <button onClick={addButton}>Add button {count + 1}</button>
      {new Array(count).fill(null).map((item, index) => (
        <button key={index} onClick={() => handleClick(index)}>
          button {index + 1}
        </button>
      ))}
    </div>
  );
};

export default AddButton;
