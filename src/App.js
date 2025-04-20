import "./App.css";
import Header from "./Header";
import GeneratorApp from "./GeneratorApp";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <GeneratorApp />
        <Footer />
      </div>
    </div>
  );
}

export default App;
