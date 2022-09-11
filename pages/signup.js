import {Container} from "react-bootstrap"
import {useState} from "react";
import axios from "axios"; 
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function signUp() {
    const [page, setPage] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message,setMessage] = useState("");
    const [className,setClassName] = useState("");
    const router = useRouter()
    const isError = false;

  
    const RegisterUser = async ( e )=> {
        setMessage("")
        isError = false
        e.preventDefault();
        const credentials = {
            username,
            password
        }
        try{
        const user = await axios.post(
        'api/signup',  
        JSON.stringify(credentials),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        })
        setMessage(user.data)
        console.log(user)
        router.push("/login")
    }catch(err){
        console.log(err)
        isError = true;
        setMessage(err.response.data)
    }   
    setClassName(isError ? "text-danger" : "text-success")
}

    return (
        <>
         
        <Container
            className="d-flex justify-content-center align-items-center flex-column"
            style={{
                minHeight: "100vh"
            }}>
           <h1  className={className}>{message}</h1>
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
                <button type="submit"  className="btn btn-primary mt-2 ms-2">Sign up</button>
                <Link href="/login"><a className="text-muted mt-5 ms-3">Already have an account</a></Link>
            </form>
        </Container>
</>
    )

}