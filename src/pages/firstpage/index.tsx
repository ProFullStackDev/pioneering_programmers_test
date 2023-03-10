import LeftPanel from "./left-panel";
import RightPanel from "./right-panel";
import { useState } from "react";
import moment from "moment";

import "../../styles/firstpage.css";

const FirstPage = () => {
  const [message, setMessage] = useState<string>("");

  const sendMessage = (text: string) => {
    // Add new line and text to the current message
    const time: string = moment().format("MM/DD/YYYY HH:mm:SS");
    const newLine: string = message !== "" ? "\n" : "";
    return setMessage(`${message}${newLine}${time} ${text}`);
  };

  return (
    <>
      <LeftPanel sendMessage={sendMessage} />
      <RightPanel message={message} />
    </>
  );
};

export default FirstPage;
