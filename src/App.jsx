import { NavBar } from "./components/Navbar";
import { Logo } from "./components/Logo";
import { HomePage } from "./pages/homepage";
function App() {
  return (
    <div className="container-top">
      <Logo />
      <NavBar />
      <HomePage />
    </div>
  );
}

export default App;
