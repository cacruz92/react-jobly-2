import './App.css';
import { Route, Routes} from "react-router-dom";
import Home from "./Home";
import Companies from './Companies';
import Company from './Company';
import Jobs from './Jobs';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Profile from './Profile';

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/companies/:company" element={<Company />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
    </div>
  );
}

export default App;
