import Contacts from "./component/contact/Contacts";
import Navbar from "./component/navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Contacts />
    </div>
  );
}

export default App;
