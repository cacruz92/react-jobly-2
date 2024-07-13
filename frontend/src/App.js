import './App.css';
import { Route, Routes} from "react-router-dom";
import JoblyApi from "./api";
import Home from "./Home";
import ListPage from './ListPage';
import Company from './Company';
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
    async function getData() {
      const[companies, jobs] = await Promise.all([
        JoblyApi.request('companies'),
        JoblyApi.request('jobs')
      ]);
      setCompanyList(companies.companies);
      setJobList(jobs.jobs);
      setIsLoading(false);
    }
    getData();
  },[])


  async function getCompany(companyHandle) {
    let companyInfo = await JoblyApi.getCompany(companyHandle);
    return companyInfo;
  }

  

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <NavBar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/companies" element={<ListPage list={companyList} title="Companies" category="Companies" />} />
            <Route path="/companies/:companyHandle" element={<Company getCompany={getCompany}/>} />
            <Route path="/jobs" element={<ListPage list={jobList} title="Jobs" category="Jobs" />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignupForm/>} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
    </div>
  );
}

export default App;
