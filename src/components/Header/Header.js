import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <h1>Rancid Tomatillos</h1>
      <input
        className="search-input"
        type="text"
        placeholder="Search for a movie"
      />
    </div>
  );
};

export default Header;
