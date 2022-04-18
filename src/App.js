import './App.css';
import { Header } from './components/Header';
import { Current } from './components/Current';
import { Nav } from './components/Nav';
import { Dishes } from './components/Dishes';
import { Dropdown } from './components/Dropdown';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Card } from './components/Card';
import { Footer } from './components/Footer';


function App() {
  return (
    <>
    <div className="App">
     <div className='fixed'>
     <Header />
      <Current />
      <br/>
      <Nav />
      <Dishes />
     </div>
      <hr/>
      <Dropdown />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Footer />
    </div>
    </>
  );
}

export default App;
