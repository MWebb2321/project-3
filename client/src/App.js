// import './App.css';
import Carousel from './components/carousel';
import Login from './components/login';
import Navbar from './components/navbar';
import Signup from './components/signup';
import { BrowserRouter as Router, Switch } from "react-router-dom";
// Route,

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Login />
          <Signup />
          <Carousel />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
