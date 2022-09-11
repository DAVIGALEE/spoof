import {Container} from "react-bootstrap"
import {useState} from "react";
import Link from 'next/link'
import axios from "axios"; 

export default function Login() {
    const [page, setPage] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    let errorMessage;
    const handleLogin = () => {
        setPage("api/login")
    }
    const handleSignUp = () => {
        setPage("api/signup")
    }
    
    const RegisterUser = async( e )=> {
        e.preventDefault();
        const credentials = {
            username,
            password
        }
      await axios.post(
        'api/login',  
        JSON.stringify(credentials),
       ).then(response => { 
         
            console.log("as")
        })
        .catch(error => {
            console.log(error.response)
        });
   
    }
   
    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{
                minHeight: "100vh"
            }}>
            <form onSubmit={e=>RegisterUser(e)} method="POST" className="form-group col-5">
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        name="username"
                        aria-describedby="textHelp"
                        placeholder="Enter Username" onChange={e=>setUsername(e.target.value)}/>
                    <small id="textHelp" className="form-text text-muted">Hi :)</small>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
                </div>

                <button type="submit" onClick={handleLogin} className="btn btn-primary mt-2">Log in</button>
                <Link href="/signup"><a className="text-muted mt-5 ms-3">create account</a></Link>
            </form>
        </Container>

    )

}