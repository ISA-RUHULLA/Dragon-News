import React from 'react';
import { Link } from 'react-router';

const Register = () => {

   const handleRegister = (e) => {
        e.preventDefault();
        console.log(e.target)

    }
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h2 className='flex justify-center text-2xl font-semibold py-4'>Register your account</h2>
                <div className="card-body">
                    <form onSubmit={handleRegister}>
                        <fieldset className="fieldset">
                            {/* Name  */}
                            <label className="label">Name</label>
                            <input type="email" className="input" placeholder="Name" />
                            {/* Photo URl */}
                            <label className="label">Photo URl</label>
                            <input type="email" className="input" placeholder="Photo URl" />
                            {/* Email */}
                            <label className="label">Email</label>
                            <input type="email" className="input" placeholder="Email" />
                            {/* Password  */}
                            <label className="label">Password</label>
                            <input type="password" className="input" placeholder="Password" />


                            <button type='submit' className="btn btn-neutral mt-4">Register</button>
                            <p className='flex justify-center font-semibold text-sm py-3'>Already Dont’t Have An Account ? <Link to='/auth/login' className='text-secondary'>Login</Link></p>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;