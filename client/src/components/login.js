import React from 'react'
import {Link} from 'react-router-dom';


function Login() {
    return (

        <div className="vh-100 d-flex justify-content-center align-items-center">
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-12 col-md-8 col-lg-6">
                        <div className="border border-3 border-primary"></div>
                        <div className="card bg-white">
                            <div className="card-body p-5">
                                <form className="mb-3 mt-md-4">
                                    <div className="mb-3">
                                        <label for="email" className="form-label ">Email</label>
                                        <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="password" className="form-label ">Password</label>
                                        <input type="password" className="form-control" id="password" placeholder="*****" />
                                    </div>
                                    <p className="small"><a className="text-primary" href="forget-password.html">Forgot password?</a></p>
                                    <div className="d-grid">
                                        <button className="btn btn-outline-dark" type="submit">Login</button>
                                    </div>
                                </form>
                                <div>
                                    <p className="mb-0  text-center">Don't have an account?<Link to="/register">Register</Link></p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}

export default Login