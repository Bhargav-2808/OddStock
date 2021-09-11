
//import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import About from '../src/Components/About/About';
import Header from '../src/Components/Header/Header';

function App() {
  return (
    <>
    <Header accountHolder="Dhruv" login={true}/>
    <About/>
    </>
  );
}

export default App;
