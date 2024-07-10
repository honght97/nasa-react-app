export default function SideBar({ handleToggleModal }) {
  return (
    <div className="sidebar">
      <div onClick={handleToggleModal} className="bgOverlay"></div>
      <div className="sidebarContents">
        <h2>The Brutal Martian Landscape</h2>
        <div>
          <p>Description</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium sequi quae quaerat voluptatum quasi sint porro.
            Provident corrupti adipisci, at tempora labore esse expedita
            repellat? Eaque laudantium nesciunt enim autem.
          </p>
        </div>
        <button onClick={handleToggleModal}>
          <i className="fa-solid fa-right-long"></i>
        </button>
      </div>
    </div>
  );
}
