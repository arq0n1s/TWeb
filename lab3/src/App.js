import './App.css';
import Navbars from './components/navbars';
import Footer from './components/footer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ApplyButton from './components/apply_button';
//import '../react/jsx-pascal-case';


//rafce - components hotkey

function App() {
  return (
    <div className="App">
      <Navbars/>
      <Footer message={'hello'}/>
      <ApplyButton/>
    </div>
  );
}

export default App;
