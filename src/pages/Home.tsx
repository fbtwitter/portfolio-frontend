import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main>
      Home Page
      <Link to={"/mentor"}>
        <span className="block">Go to Front End Mentor</span>
      </Link>
    </main>
  );
};

export default Home;
