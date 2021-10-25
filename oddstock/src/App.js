
//import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import About from '../src/Components/About/About';
import Header from '../src/Components/Header/Header';
import Search from "../src/Components/Search/Search";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import News from "./Components/News/News";

function App() {
  return (
    <>
    <Header accountHolder="Dhruv" login={true}/>
    <About/>
    <SignUp/>
    <Login/>
    <Search/>
    <News/>
    </>
  );
}

export default App;
