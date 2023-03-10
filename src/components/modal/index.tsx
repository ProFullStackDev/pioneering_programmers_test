import "./style.css";

export enum ModalType {
  Normal,
  Remove,
  Delete,
}

type Props = {
  type: ModalType;
  title: string;
  content: string;
  visible: boolean;
  onClose: Function;
  onRemove: Function;
  onDelete: Function;
};

const Modal: React.FC<Props> = ({
  type,
  title,
  content,
  visible,
  onClose,
  onRemove,
  onDelete,
}) => {
  return (
    <div className={`modal fade ${visible ? "show" : "hidden"}`}>
      <div className="modal-backdrop"></div>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <span className="close" onClick={() => onClose()}>
              <span aria-hidden="true">&times;</span>
            </span>
          </div>
          <div className="modal-body">
            <p>{content}</p>
          </div>
          <div className="modal-footer">
            {type === ModalType.Remove && (
              <button className="button-remove" onClick={() => onRemove()}>
                Remove
              </button>
            )}
            {type === ModalType.Delete && (
              <button className="button-delete" onClick={() => onDelete()}>
                Delete
              </button>
            )}
            {type === ModalType.Normal ? (
              <button className="button-ok" onClick={() => onClose()}>
                OK
              </button>
            ) : (
              <button className="button-cancel" onClick={() => onClose()}>
                Cancel
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
