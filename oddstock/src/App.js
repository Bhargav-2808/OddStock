
//import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import About from '../src/Components/About/About';
import Header from '../src/Components/Header/Header';
import Search from "../src/Components/Search/Search";

function App() {
  return (
    <>
    <Header accountHolder="Dhruv" login={true}/>
    <About/>
    <Search/>
    </>
  );
}

export default App;
