import "./App.css";
import { photos } from "./content";
import Routing from "./routing/Routing";
import image1 from "./assets/photos/image1.jpg";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

function App() {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 3, 992: 4 }}>
      <Masonry gutter="1rem">
        {photos.map((item, index) => (
          <img
            src={item}
            key={index}
            alt=""
            className="w-[100%]  block rounded-md transition-[.3s] hover:scale-[1.1]"
          />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
}

export default App;
