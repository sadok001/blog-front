import React, {useRef} from 'react';
import { register } from "../../services/authentication";
export default function Registration() {

    const emailRef = useRef();
    const nameRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();

    const handleRegister = async (e) => {
        e.preventDefault();

        const user = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            confirm_password: confirmPasswordRef.current.value
        }

     await register(user)
    }

    return (
        <form onSubmit={handleRegister}>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" ref={nameRef} id="name" placeholder="Enter your name" />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input type="email" className="form-control" ref={emailRef} id="email" aria-describedby="emailHelp" placeholder="Enter email" />
            </div>

            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" ref={passwordRef}  id="password" placeholder="Password" />
            </div>

            <div className="form-group">
                <label htmlFor="cpassword">Confirm password</label>
                <input type="password" className="form-control" ref={confirmPasswordRef}  id="cpassword" placeholder="Confirm password" />
            </div>

            <button type="submit" className="btn btn-primary form-control">Register</button>
        </form>
    )
}
