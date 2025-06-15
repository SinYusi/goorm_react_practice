import "./index.css";

const SideBarFooter = ({ onAddMemo }) => {
  return (
    <div className="SideBarFooter">
      <button className="SideBarFooter__add-button" onClick={onAddMemo}>
        +
      </button>
    </div>
  );
};

export default SideBarFooter;
