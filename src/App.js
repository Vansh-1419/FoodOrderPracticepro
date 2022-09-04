import "./App.css";
import Meals from "./Components/Meals/Meals";
import Header from "./Components/Layout/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Meals />
      </main>
    </div>
  );
}

export default App;
