import logo from './logo.svg';
import './App.css';

function App() {
  const CurrentYear = Date();
  const isLoggedIn = false;

  
  return (
    <div>
    <h1>ENSF-381:Full Stack Web Development</h1>
      <p>React Components</p>
      <p>{CurrentYear}</p>
      {isLoggedIn ? <p>Welcome Back!</p> : <p>Please log in</p>}
      </div>
  );
}

export default App;
