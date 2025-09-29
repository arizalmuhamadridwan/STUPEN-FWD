import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/home";
import Teams from "./pages/team";
import Footers from "./pages/footer";


function App() { 
  return (
    <>
      <div className="container ">
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="teams" element={<Teams />} />
            <Route path="footers" element={<Footers />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
