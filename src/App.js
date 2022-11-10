import { BrowserRouter } from "react-router-dom";
import NavBar from "./Components/NavBar";
import NavRoutes from "./NavRoutes/NavRoutes";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <NavRoutes/>
      </BrowserRouter>
    </>
  );
}

export default App;
