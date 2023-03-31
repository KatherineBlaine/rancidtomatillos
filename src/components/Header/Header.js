import "./Header.css";
import Form from "../Form/Form";

const Header = ({ search, resetSearch }) => {
  // console.log(resetSearch)
  return (
    <div className="header">
      <h1>Rancid Tomatillos</h1>
      <Form search={search} resetSearch={resetSearch}/>
    </div>
  );
};

export default Header;
