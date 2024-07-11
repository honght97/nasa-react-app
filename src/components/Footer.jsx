export default function Footer({ handleToggleModal, data }) {
  return (
    <footer>
      <div className="bgGradient"></div>
      <div>
        <h2>{data?.title}</h2>
        <h3>{data?.copyright}</h3>
      </div>
      <button onClick={handleToggleModal}>
        <i className="fa-solid fa-circle-info"></i>
      </button>
    </footer>
  );
}
