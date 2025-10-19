import React from 'react';
import { Link } from 'react-router';
import { use,  } from 'react';
import AuthProvider, { AuthContext } from '../../provider/AuthProvider';


const Login = () => {
    
    const {logInUser, setUser } = use(AuthContext)

const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password)

    logInUser(email, password)
    .then((result) =>{
        const user = result.user;
        setUser(user);
    })
    .catch((error)=>{
        console.log(error.message);
    })



}

    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h2 className='flex justify-center text-2xl font-semibold py-4'>Login Your Account</h2>
                <div className="card-body">
                    <form onSubmit={handleLogIn}>
                    <fieldset className="fieldset">
                        {/* Email  */}
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" />
                        {/* password  */}
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" />

                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button type='submit' className="btn btn-neutral mt-4">Login</button>
                        <p className='flex justify-center font-semibold text-sm py-3'>Dont’t Have An Account ? <Link to='/auth/register' className='text-secondary'>Register</Link></p>
                    </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;