import './App.css';
import UserNavbar from './components/userNavbar';
import Home from './components/home'
import Friends from './components/friends';
import MyHabits from './components/MyHabits';

function App() {
  return (
    <>
      <UserNavbar />
      <div className='mb-10'></div>
      <Home />
      <MyHabits />
      <Friends></Friends>
    </>
  );
}

export default App;
