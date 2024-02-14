import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./assets/Pages/Home";
import About from "./assets/Pages/About";
import Services from "./assets/Pages/Services";
import WhyUs from "./assets/Pages/WhyUs";
import Team from "./assets/Pages/Team";
function App() {
  return (
      <div>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/services" element={<Services/>}></Route>
          <Route path="/whyus" element={<WhyUs/>}></Route>
          <Route path="/team" element={<Team/>}></Route>
        </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App
