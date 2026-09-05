import Ourprogram from "./Ourprogram";
import Programcard from "./Programcard";
import Impact from "./Impact";
import Gallery from "./Gallery";

// Programs page
const Program = () => {
  return (
    <main className="w-full">
      <Ourprogram />
      <Programcard />
      <Impact />
      <Gallery />
    </main>
  );
};

export default Program;