import React, {useRef} from 'react';
import { login } from "../../services/authentication";

export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();

    const handleLogin = async (e) => {
        e.preventDefault();
        login({email: emailRef.current.value,password:passwordRef.current.value})
    }

    return (
        <form onSubmit={handleLogin}>
            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input type="email" className="form-control" ref={emailRef} id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>

            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" ref={passwordRef}  id="password" placeholder="Password" />
            </div>

            <button type="submit" className="btn btn-primary form-control">Login</button>
        </form>
    )
}
