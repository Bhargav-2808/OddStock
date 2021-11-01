
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import About from '../src/Components/About/About';
import Header from '../src/Components/Header/Header';
import Search from "../src/Components/Search/Search";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import News from "./Components/News/News";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
    <Header accountHolder="Dhruv" login={true}/>
    <About/>
<<<<<<< HEAD
    {/* <SignUp/>
    <Login/> */}
    <Search/>
    {/* <News/> */}
    {/* <Footer/> */}
=======
    <SignUp/>
    <Login/>
    <Search/>
    <News/>
    <Footer/>
>>>>>>> 898b819bca90337f3b020e1d31ebf1201f1b60a7
    </>
  );
}

export default App;
