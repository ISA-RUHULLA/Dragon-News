
import { Link } from 'react-router';
import AuthProvider, { AuthContext } from '../../provider/AuthProvider';
import { use,  } from 'react';

const Register = () => {

    const {createUser, setUser} = use(AuthContext)

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        console.log({name, email, photo, password})

        createUser(email, password)
        .then((result) =>{
            const user = result.user;
            console.log(user);
            setUser(user);
        })
        .catch((error) => {
            console.log(error.message)
        });



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
                            <input type="text" name='name' className="input" placeholder="Name" required/>
                            {/* Photo URl */}
                            <label className="label">Photo URl</label>
                            <input type="text" name='photo' className="input" placeholder="Photo URl" required />
                            {/* Email */}
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" required />
                            {/* Password  */}
                            <label className="label">Password</label>
                            <input type="password" name='password' className="input" placeholder="Password" required />


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