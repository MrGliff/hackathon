import logo from './logo.svg';
import './App.css';
import UserNavbar from './components/userNavbar';
import Home from './components/home'

function App() {
  return (
    <>
      <UserNavbar />
      <div className='mt-5'>
      <Home/>
      </div>
    </>
  );
}

export default App;
