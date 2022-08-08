import { Link } from "react-router-dom";

function Mentor() {
  return (
    <main>
      Mentor
      <Link to="newbie">
        <span className="block"> Newbie Category</span>
      </Link>
    </main>
  );
}

export default Mentor;
