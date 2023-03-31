import "./Header.css";
import Form from "../Form/Form";

const Header = ({ search }) => {
  return (
    <div className="header">
      <h1>Rancid Tomatillos</h1>
      <Form search={search}/>
    </div>
  );
};

export default Header;
