export default function Footer({ handleToggleModal }) {
  return (
    <footer>
      <div className="bgGradient"></div>
      <div>
        <h2>The Brutal Martian Landscape</h2>
        <h3>APOD Project</h3>
      </div>
      <button onClick={handleToggleModal}>
        <i className="fa-solid fa-circle-info"></i>
      </button>
    </footer>
  );
}
