import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      Home Page
      <Link to={"/mentor"}>
        <span className="block">Go to Front End Mentor</span>
      </Link>
    </>
  );
};

export default Home;
