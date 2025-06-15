import MemoItem from "../MemoItem";

const MemoList = ({
  memos,
  selectedMemoIndex,
  setSelectedMemoIndex,
  onDeleteMemo,
}) => {
  return (
    <div>
      {memos.map((memo, index) => (
        <MemoItem
          onMemoItemClick={() => setSelectedMemoIndex(index)}
          isSelected={selectedMemoIndex === index}
          onDeleteMemo={(e) => {
            onDeleteMemo(index);
            e.stopPropagation();
          }}
          key={index}
        >
          {memo.title}
        </MemoItem>
      ))}
    </div>
  );
};

export default MemoList;
