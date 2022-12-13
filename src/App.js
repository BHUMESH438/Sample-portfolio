import { Navbar } from "./components/Navbar";
import { Header } from "./components/Header";
import { About } from "./components/About";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
    </>
  );
}

export default App;
