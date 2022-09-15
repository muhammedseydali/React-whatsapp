import React from 'react';
import NavBar from './components/navbar';
import ChatNavBar from './components/chatnavbar';
import Cards from './components/cards'
import Messages from './components/messages';
import Searchbox from './components/searchbox';
import Footer from './components/footer';
import './index.css'; 
import Avatar from './components/Avatar';

function App() {
  return (
    <div className="parent">
      <div className="left">
        <NavBar />
        <Searchbox />
        <Cards />
      </div>
      <div className="right">
        <ChatNavBar />
        <Messages />
        <Footer/>
      </div>  
    </div>
  );
}

export default App;
