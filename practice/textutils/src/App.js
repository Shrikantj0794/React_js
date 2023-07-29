import './App.css';
// import About from './compoenent/About';
import Navbar from './compoenent/Navbar';
import Form from './compoenent/Form';
function App() {
  return (
    <>
    <textForm/>
      <Navbar title="shrikant" about="about us"/>
      {/* <Navbar/> */}
      <div className="container my-3" >
      <Form heading ="Enter the Text"/>
      {/* <About/> theme change */}
      </div>
    </>
  );
}

export default App;
