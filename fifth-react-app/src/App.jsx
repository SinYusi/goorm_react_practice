import { useCallback, useState } from "react";
import "./App.css";
import MemoContainer from "./components/MemoContainer";
import SideBar from "./components/SideBar";
import { localStorageSetItem } from "./lib/storage";

function initMemosGetItem() {
  return JSON.parse(localStorage.getItem("memos")) || [];
}

function App() {
  const [memos, setMemos] = useState(initMemosGetItem);
  const [selectedMemoIndex, setSelectedMemoIndex] = useState(0);

  const handleMemoChange = useCallback(
    (newMemo) => {
      setMemos((prev) => {
        const newMemos = [...prev];
        newMemos[selectedMemoIndex] = newMemo;
        localStorageSetItem("memos", newMemos);
        return newMemos;
      });
    },
    [selectedMemoIndex]
  );

  const handleAddMemo = useCallback(() => {
    const newMemo = {
      title: "Untitled",
      content: "",
      createAt: new Date().getTime(),
      updateAt: new Date().getTime(),
    };
    setMemos([...memos, newMemo]);
    setSelectedMemoIndex(memos.length);

    localStorageSetItem("memos", [...memos, newMemo]);
  }, [memos]);

  const handleDeleteMemo = useCallback(
    (deleteMemoIndex) => {
      setMemos((prev) => {
        const newMemo = prev.filter((_, index) => index !== deleteMemoIndex);
        localStorageSetItem("memos", newMemo);
        return newMemo;
      });
      const newMemo = memos.filter((memo, index) => index !== deleteMemoIndex);
      setMemos(newMemo);

      localStorageSetItem("memos", newMemo);
      if (deleteMemoIndex === selectedMemoIndex) {
        setSelectedMemoIndex(0);
      } else if (deleteMemoIndex < selectedMemoIndex) {
        setSelectedMemoIndex(selectedMemoIndex - 1);
      }
    },
    [memos, selectedMemoIndex]
  );

  return (
    <div className="App">
      <SideBar
        memos={memos}
        selectedMemoIndex={selectedMemoIndex}
        setSelectedMemoIndex={setSelectedMemoIndex}
        onAddMemo={handleAddMemo}
        onDeleteMemo={handleDeleteMemo}
      />
      <MemoContainer
        memo={memos[selectedMemoIndex]}
        onMemoChange={handleMemoChange}
      />
    </div>
  );
}

export default App;
