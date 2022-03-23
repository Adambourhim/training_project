import Contact from "./component/contact/Contact";
import Navbar from "./component/navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Contact />
      <Contact name="Adam" tel="0632727991" email="adamborhim@gmail.com" />
      <Contact name="Salma" tel="0632727992" email="salma@gmail.com" />
      <Contact name="Hamza" tel="0632727993" email="hamza@gmail.com" />
      <Contact name="Insaf" tel="0632727994" email="insaf@gmail.com" />
    </div>
  );
}

export default App;
