import "./Header.css";
import Form from "../Form/Form";

const Header = ({ search, resetSearch, page }) => {
  return (
    <div className="header">
      <h1>Rancid Tomatillos</h1>
      {page && <Form search={search} resetSearch={resetSearch} />}
    </div>
  );
};

export default Header;
