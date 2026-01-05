import { NavLink } from "react-router-dom";
import Icon from "../../assets/Homepage/navbar/logo.png";
const Navbar = () => {
  return (
    <div className="flex justify-between w-[80%] ">
      <NavLink to="/">
        <img src={Icon} alt="logo_home" className="w-10 h-10 rounded-full" />
      </NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/summary">Summary</NavLink>
      <NavLink to="/profile">Profile</NavLink>
    </div>
  );
};

export default Navbar;
