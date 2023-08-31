import { NavBar } from "./components/NavBar";
import { Header } from "./pages/Header";
import {Projects} from "./pages/Projects"
import {About} from "./pages/About"
import { Contact } from "./pages/Contact";
import "./App.css"

function App() {
  return (
    <div>
      <NavBar />
        <Header />
        <About />
        <Projects />
        <Contact />
    </div>
  );
}

export default App;
