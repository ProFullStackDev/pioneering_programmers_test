import ThemeButton from "./theme-button";
import MessageBox from "./message-box";
import AddButton from "./add-button";

export interface Props {
  sendMessage: Function;
}

const LeftPanel: React.FC<Props> = (props) => {
  return (
    <div className="left-panel">
      <ThemeButton {...props} />
      <hr />
      <MessageBox {...props} />
      <hr />
      <AddButton {...props} />
    </div>
  );
};

export default LeftPanel;
