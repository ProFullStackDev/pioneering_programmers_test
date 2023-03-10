type Props = {
  message: string;
};

const RightPanel: React.FC<Props> = ({ message }) => {
  return (
    <div className="right-panel">
      <textarea className="message-box" value={message} readOnly />
    </div>
  );
};

export default RightPanel;
