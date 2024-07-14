import './App.css';
import { Route, Routes} from "react-router-dom";
import {jwtDecode} from "jwt-decode";
import JoblyApi from "./api";
import Home from "./Home";
import ListPage from './ListPage';
import Company from './Company';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Profile from './Profile';
import {useContext, useEffect, useState } from 'react';
import NavBar from './NavBar';
import UserContext from './UserContext';


function App() {
  
  const [isLoading, setIsLoading] = useState(true);
  const [companyList, setCompanyList] = useState([]);
  const [jobList, setJobList] = useState([]);
  const { currentUser, setCurrentUser, token, setToken } = useContext(UserContext);
  
  useEffect(() => {
    async function getCurrentUser(){
      if(token){
        try{
          JoblyApi.token = token;
          let {username} = jwtDecode(token);
          let user = await JoblyApi.getCurrentUser(username);
          setCurrentUser(user)
        } catch (err) {
          console.error("Issue loading user information:", err);
          setCurrentUser(null);
          setToken(null);
        }
      }
      setIsLoading(false)
    }
    getCurrentUser();
  }, [token, setCurrentUser, setToken])

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

  async function handleUserAuth(formData, authType) {
    try {
      let userToken;
      if (authType === 'login') {
        userToken = await JoblyApi.login(formData);
      } else if (authType === 'register') {
        userToken = await JoblyApi.register(formData);
      } else {
        throw new Error('Invalid auth type');
      }
  
      let { username } = jwtDecode(userToken);
      let user = await JoblyApi.getCurrentUser(username);
      setToken(userToken);
      setCurrentUser(user);
      return { success: true };
    } catch (errors) {
      return { success: false, errors };
    }
  }

  const logout = () => {
    setCurrentUser(null);
    setToken(null);
  };

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <NavBar logout={logout} />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/companies" element={<ListPage list={companyList} title="Companies" category="Companies" />} />
            <Route path="/companies/:companyHandle" element={<Company getCompany={getCompany}/>} />
            <Route path="/jobs" element={<ListPage list={jobList} title="Jobs" category="Jobs" />} />
            <Route path="/login" element={<LoginForm handleUserAuth={handleUserAuth} />} />
            <Route path="/signup" element={<SignupForm handleUserAuth={handleUserAuth} />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
    </div>
  );
}

export default App;
