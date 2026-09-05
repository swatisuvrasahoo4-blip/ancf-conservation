import Heros from "./Herobox";
import Mission from "./Missionbox";
import Wedo from "./Wedobox";
import Whyelephant from "./Whyelephant";
import Partners from "./Partners";
import Cta from "./Cta";

// Home page
const Home = () => {
  return (
    <main className="w-full">
      <Heros />
      <Mission />
      <Wedo />
      <Whyelephant />
      <Partners />
      <Cta />
    </main>
  );
};

export default Home;