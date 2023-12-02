import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import DetailHomeTable from "./components/DetailHomeTable";
import IntroText from "./components/IntroText";

function App() {
  return (
    <>
      <Header />
      <div className="px-4 md:w-4/6 mx-auto">
        <Home />
        <DetailHomeTable />
        <IntroText />
      </div>
    </>
  );
}

export default App;
