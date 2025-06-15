import { useState } from "react";
import MemoList from "../MemoList";
import SideBarFooter from "../SideBarFooter";
import SideBarHeader from "../SideBarHeader";
import "./index.css";
import { localStorageSetItem } from "../../lib/storage";

function initIsOpenSideBarGetItem() {
  return JSON.parse(localStorage.getItem("isOepnSideBar"));
}

const SideBar = ({
  memos,
  selectedMemoIndex,
  setSelectedMemoIndex,
  onAddMemo,
  onDeleteMemo,
}) => {
  const [isOpenSideBar, setIsOpenSideBar] = useState(initIsOpenSideBarGetItem);
  console.log(isOpenSideBar);

  const handleSwitchIsSideBarOepnClick = () => {
    setIsOpenSideBar((prev) => {
      localStorageSetItem("isOepnSideBar", !prev);
      return !prev;
    });
  };

  return (
    <div className={`SideBar ${isOpenSideBar ? "" : "close"}`}>
      <SideBarHeader
        isOpenSideBar={isOpenSideBar}
        onSwitchIsSideBarOepnClick={handleSwitchIsSideBarOepnClick}
      />
      <MemoList
        memos={memos}
        selectedMemoIndex={selectedMemoIndex}
        setSelectedMemoIndex={setSelectedMemoIndex}
        onDeleteMemo={onDeleteMemo}
      />
      <SideBarFooter onAddMemo={onAddMemo} />
    </div>
  );
};

export default SideBar;
