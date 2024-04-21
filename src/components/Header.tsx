import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <div className="d-grid gap-2 d-md-block">
        <Link to={"/"} className="btn btn-primary m-5" type="button">
          Home
        </Link>
        <Link to={"/hello"} className="btn btn-primary m-5" type="button">
          Hello
        </Link>
        <Link to={"/duck"} className="btn btn-primary m-5" type="button">
          Duck
        </Link>
      </div>
    </div>
  );
};
