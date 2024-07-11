import './App.css';
import { Route, Routes} from "react-router-dom";
import JoblyApi from "./api";
import Home from "./Home";
import Companies from './Companies';
import Company from './Company';
import Jobs from './Jobs';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Profile from './Profile';
import { useEffect, useState } from 'react';
import NavBar from './NavBar';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [companyList, setCompanyList] = useState([]);
  const [jobList, setJobList] = useState([])

  useEffect(() => {
    async function getCompanies() {
      
      let companies = await JoblyApi.request('companies');
      console.log("Fetched companies:", companies); // Debug log
      setCompanyList(companies.companies);
      setIsLoading(false);
    }
    getCompanies();
  }, [])

  useEffect(() => {
    async function getJobs() {
      let jobs = await JoblyApi.request('jobs');
      setJobList(jobs);
      setIsLoading(false);
    }
    getJobs();
  }, [])

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <NavBar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/companies" element={<Companies companyList={companyList} title="Companies" />} />
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
