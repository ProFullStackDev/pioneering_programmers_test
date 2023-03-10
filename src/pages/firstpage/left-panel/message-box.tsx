import { useState } from "react";

import { Props } from ".";

const MessageBox: React.FC<Props> = ({ sendMessage }) => {
  const [enable, setEnable] = useState<boolean>(false);
  const [text, setText] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText: string = e.target.value;
    setText(newText);
    setEnable(newText !== "");
  };

  const handleClick = () => {
    setText("");
    setEnable(false);
    if (text !== "") sendMessage(`Message Send: ${text}`);
  };

  return (
    <div className="message-container">
      <textarea value={text} onChange={handleChange} />
      <button className={`${!enable && "disabled"}`} onClick={handleClick}>
        Send
      </button>
    </div>
  );
};

export default MessageBox;
