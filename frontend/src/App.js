import logo from './logo.svg';
import './App.css';
import { Route, Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={} />
            <Route path="/companies" element={} />
            <Route path="/companies/:company" element={} />
            <Route path="/jobs" element={} />
            <Route path="/login" element={} />
            <Route path="/signup" element={} />
            <Route path="/profile" element={} />
        </Routes>
    </div>
  );
}

export default App;
