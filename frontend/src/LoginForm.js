import React, {useState} from "react";
import {useNavigate} from "react-router-dom"
import JoblyApi from "./api";
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    ListGroup,
    ListGroupItem
  } from "reactstrap";

const LoginForm = () => {
    const navigate = useNavigate();
    const INITIAL_STATE = {
        username: "",
        password: "",
    };

    // use state to control the form
    const [formData, setFormData] = useState(INITIAL_STATE);
    const [formErrors, setFormErrors] = useState();

    // allow the changes to the form to be entered into state 
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    // submit the form if the form is filled out, otherwise alert them it's not
    async function handleSubmit(e) {
        e.preventDefault();
        try{
            let token = await JoblyApi.login(formData);
            console.log(token)
            console.log("success")
            navigate("/")
        } catch(errors) {
            setFormErrors(errors)
            console.log(formErrors)
        }
        
    }

    return(
        <div className="formContainer">
            <Card>
                <CardBody>
                    <h1>Sign Up</h1>

                    <form 
                    className="signUpForm" 
                    onSubmit={handleSubmit}
                    >
                        
                        <label htmlFor="username">Username</label>
                        <input 
                        id="username"
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        />
                        <br></br>                
                        <label htmlFor="password">Password</label>
                        <input 
                        id="password"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        />
                        <br></br>
                        <button>Submit</button>
                    </form>
                </CardBody>
            </Card>
        </div>
    )
}

export default LoginForm;