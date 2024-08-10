// import 'bootstrap/dist/css/bootstrap.min.css'; // issue with bootstrap
import './App.css';
import Header from './components/Header';
import Events from './components/Events';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Events />
      </main>
      <Footer />
    </div>
  );
}

export default App;