import "./App.css";
import Home from "./component/Home/Home";
import Nav from "./component/Navbar/Nav";
import Service from "./component/Service/Service";

function App() {
  return (
    <div className="app">
      <Nav />
      <Home />
      <Service/>
    </div>
  );
}

export default App;
