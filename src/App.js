import NavBar from './components/navbar';
import Cards from './components/cards'
import Messages from './components/messages';
import Searchbox from './components/searchbox';
import Footer from './components/footer';
import './index.css';

function App() {
  return (
    <div className="parent">
      <div className="left">
        <NavBar />
        <Searchbox />
        <Cards />
      </div>
      <div className="right">
        <NavBar />
        <Messages />
        <Footer/>
      </div>  
    </div>
  );
}

export default App;
