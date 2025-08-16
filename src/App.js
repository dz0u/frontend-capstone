import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import Main from "./components/Main"
import Reservations from './components/BookingPage'
import Routes from './components/Routes';

function App() {

  return (
    <>
        <Header />
        <Routes path="/" component={Main} />
        <Routes path="/home" component={Main} />
        <Routes path="/reservations" component={Reservations} />
        <Footer />
    </>
  );
}

export default App;
