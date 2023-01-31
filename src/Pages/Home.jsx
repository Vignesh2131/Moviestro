import Popular from "../components/Popular";
import Toprated from "../components/Toprated";
import Trending from "../components/Trending";
function Home() {
  return (
    <div>
      <Trending />
      <Popular />
      <Toprated />
    </div>
  );
}

export default Home;
