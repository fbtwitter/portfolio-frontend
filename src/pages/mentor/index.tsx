import { Link } from "react-router-dom";

function Mentor() {
  return (
    <>
      Mentor
      <Link to="newbie">
        <span className="block"> Newbie Category</span>
      </Link>
    </>
  );
}

export default Mentor;
