import './App.css';
import Header from './components/header'
import Places from './components/section1'
import IconSection from './components/icon-section';
import AdventureSection from './components/adventure-section';

function App() {
  return (
    <div className="App">
      <Header />
      <Places />  
      <IconSection /> 
      <AdventureSection />  
    </div>
  );
}

export default App;
