import "./index.css";

const SideBarHeader = ({ isOpenSideBar, onSwitchIsSideBarOepnClick }) => {
  if (!isOpenSideBar) {
    return (
      <button
        className="SideBarHeader__open-button"
        onClick={onSwitchIsSideBarOepnClick}
      >
        {`>>`}
      </button>
    );
  }
  return (
    <div className="SideBarHeader">
      <h1>메모장</h1>
      <button
        className="SideBarHeader__close-button"
        onClick={onSwitchIsSideBarOepnClick}
      >
        {"<<"}
      </button>
    </div>
  );
};

export default SideBarHeader;
