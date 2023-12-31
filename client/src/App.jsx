import { EthProvider } from "./contexts/EthContext";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Navbar from "./components/OurComp/navbar";
import Post from "./components/OurComp/Post";
import Feed from "./components/OurComp/Feed";
import Login from "./components/OurComp/Login";
// import "./App.css";
import "./OurApp.css";
function App() {
  return (
    <EthProvider>
      <div id="App" style={{ backgroundColor: "rgba(63,200,255,0.4)" }}>
        <div>
          <Navbar />
        </div>
        <BrowserRouter>
          <div>
            <Routes>
              <Route path="/account" element={<Post />} />
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Feed />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </EthProvider>
  );
}

export default App;
