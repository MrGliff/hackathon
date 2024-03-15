import './App.css';
import UserNavbar from './components/userNavbar';
import Home from './components/home'
import Friends from './components/friends';
import MyHabits from './components/MyHabits';

function App() {
  return (
    <>
      <UserNavbar />
      <div className='mb-10 text-center'></div>
      <Home />
      <div className="mt-10 habits text-center text-5xl">
        <h1>Your Habits</h1>
      </div>
      <MyHabits />
      <div className="friends text-center text-5xl">
        <h1>Your Friends</h1>
      </div>
      <Friends></Friends>
    </>
  );
}

export default App;
