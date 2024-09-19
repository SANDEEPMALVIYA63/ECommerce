import logo from "./logo.svg";
//  import "./App.css";
import Header from "./component/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/pages/Home";
import Login from "./component/pages/Login";
import ShowProducte from "./component/pages/ShowProducte";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}>
            {" "}
          </Route>
          <Route path="/logo" element={<Home />}>
            {" "}
          </Route>
          <Route path="/login" element={<Login />}>
            {" "}
          </Route>
          <Route path="/home" element={<Home />}>
            {" "}
          </Route>
  
          <Route path="/ShowProducte" element={<ShowProducte />}>
            {" "}
          </Route>

          {/* <Route path='/about' element={<About/>}> </Route> */}
          {/* <Route path="/contact" element={<Contact />}>
            {" "}
          </Route>
          <Route path="/login" element={<Login />}>
            {" "} */}
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
