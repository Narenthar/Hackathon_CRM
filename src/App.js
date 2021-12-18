import "./App.css";
import Home from "./Components/pages/home/Home";
import Sidebar from "./Components/Sidebar/Sidebar";
import Topbar from "./Components/Topbar/Topbar.jsx";

function App() {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Home/>
      </div>
    </div>
  );
}

export default App;
