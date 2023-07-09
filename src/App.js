import './App.css';
import { Search } from './Search.js';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { Artist } from './Artist.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Search />}
        />      
        <Route
          path="artist/:mbid"
          element={<Artist />}
        />
      </Routes>
    </Router>
  );
}

export default App;
