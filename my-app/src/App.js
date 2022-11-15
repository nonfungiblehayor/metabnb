import './App.css';
import Header from './components/header'
import Places from './components/section1'
import IconSection from './components/icon-section';
import AdventureSection from './components/adventure-section';
import MetaNft from './components/nft-section';
import Footer from './components/footer';
import Modal from './components/modal';
import { useState} from 'react'

function App() {
  const [openMenu,closeMenu] = useState(false)
    
  const showModal = function() {
      closeMenu(!openMenu)
  }
  const hideModal = function() {
      closeMenu(!openMenu)
  }
  return (
    <div className="App">
      {openMenu ? <Modal hide={hideModal}/> : ''}
      <Header show={showModal}/>
        <Places />  
      <IconSection /> 
      <AdventureSection />  
      <MetaNft />
   <Footer />  
    </div>
  );
}

export default App;
