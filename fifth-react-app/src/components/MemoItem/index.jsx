import "./index.css";

const MemoItem = ({ children, onMemoItemClick, isSelected, onDeleteMemo }) => {
  return (
    <div
      className={"MemoItem" + (isSelected ? " selected" : "")}
      onClick={onMemoItemClick}
    >
      {children}
      <button className="MemoItem__delete-button" onClick={onDeleteMemo}>
        X
      </button>
    </div>
  );
};

export default MemoItem;
