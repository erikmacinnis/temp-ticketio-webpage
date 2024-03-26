import './App.css';
import ComingSoon from './components/ComingSoon';
import Footer from './components/Footer';
import Navbar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main className="center-content">
        <ComingSoon/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
