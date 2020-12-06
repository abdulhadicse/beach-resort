import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home';
import Rooms from './Pages/Rooms';
import SingleRoom from './Pages/SingleRoom';
import Error from './Pages/Error';
import Navbar from './Components/Navbar/Navbar';
import { RoomProvider } from './context';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
    <RoomProvider> 
      
      <Router>
        <Navbar></Navbar>
        
        <Switch>
          
          <Route path="/rooms/:slug">
            <SingleRoom></SingleRoom>
          </Route>

          <Route path="/rooms">
            <Rooms></Rooms>
          </Route>
          
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="*">
            <Error></Error>
          </Route>
          
          </Switch>
          <Footer></Footer>
      </Router>

      </RoomProvider> 
    </div>
  );
}

export default App;
