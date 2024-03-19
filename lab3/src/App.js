import './App.css';
import Navbars from './components/navbars';
import Footer from './components/footer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ApplyButton from './components/apply_button';
//import '../react/jsx-pascal-case';
import '@mui/material'
import 'antd'

//rafce - components hotkey

function App() {
  return (
    <div className="App">
      <Navbars/>
      {/* <MenuComponent/> */}
      <Footer message={'hello'}/>
      <ApplyButton/>
    </div>
  );
}

export default App;
