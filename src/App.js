import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Navbar } from './Components/navbar/Navbar';
import { TopList } from './Components/toplist/TopList';
import Routes from './Routes';
import {Footer} from "./Components/footer/Footer"



function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <TopList />
      <Routes />
      <Footer/>
     
          
            </BrowserRouter>
    </div>
  );
}

export default App;
