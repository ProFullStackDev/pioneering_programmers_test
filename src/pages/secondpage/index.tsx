import { useState } from "react";
import Modal, { ModalType } from "../../components/modal";
import "../../styles/secondpage.css";

const SecondPage = () => {
  const [type, setType] = useState<number>(ModalType.Normal);
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [visible, setVisible] = useState<boolean>(false);
  const [removeCount, setRemoveCount] = useState<number>(0);
  const [deleteCount, setDeleteCount] = useState<number>(0);

  const onClose = () => {
    setVisible(false);
  };

  const onRemove = () => {
    setRemoveCount(removeCount + 1);
    onClose();
  };

  const onDelete = () => {
    setDeleteCount(deleteCount + 1);
    onClose();
  };

  const handleCTAClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button: HTMLButtonElement = e.currentTarget;
    setTitle("Information");
    setContent(`You have clicked the ${button.innerHTML}`);
    setType(ModalType.Normal);
    setVisible(true);
  };

  const handleRemoveButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button: HTMLButtonElement = e.currentTarget;
    setTitle("Remove?");
    setContent(
      `Are you sure you want to remove the ${button.innerHTML} button?`
    );
    setType(ModalType.Remove);
    setVisible(true);
  };

  const handleDeleteButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button: HTMLButtonElement = e.currentTarget;
    setTitle("Delete?");
    setContent(
      `Are you sure you want to delete the ${button.innerHTML} button? This cannot be undone!`
    );
    setType(ModalType.Delete);
    setVisible(true);
  };

  return (
    <div className="second-page">
      <button onClick={handleCTAClick}>Single CTA</button>
      <button onClick={handleRemoveButton}>Remove {removeCount}</button>
      <button onClick={handleDeleteButton}>
        {deleteCount % 2 === 0 ? "Delete" : "Disabled"} {deleteCount}
      </button>
      <Modal
        type={type}
        title={title}
        content={content}
        visible={visible}
        onClose={onClose}
        onRemove={onRemove}
        onDelete={onDelete}
      />
    </div>
  );
};

export default SecondPage;
