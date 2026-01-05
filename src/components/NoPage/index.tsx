import { Link } from "react-router-dom";

const NoPageFound = () => {
  return (
    <div>
      No page found
      <Link to="/" className="text-orange-700">
        click here
      </Link>
      to place order...
    </div>
  );
};

export default NoPageFound;
