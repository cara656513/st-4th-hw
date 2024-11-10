import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div>저는 홈입니다.</div>
      <Link to={"/detail"}>디테일로 가기!</Link>
    </div>
  );
};

export default Home;
