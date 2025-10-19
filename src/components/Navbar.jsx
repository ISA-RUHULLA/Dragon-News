
import { Link, NavLink } from 'react-router';
import userIcon from "../assets/user.png"
import { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';


const Navbar = () => {
    const { user, logOut } = use(AuthContext);
    const handleLogOut = () =>{
        console.log('log out clicked');
        logOut()
        .then(() => {
            alert('user log out successfully')
        })
        .catch((error) =>{
            console.log(error.message)
        })
    };
    return (
        <div className='flex justify-between items-center'>
            <div className="">{user && user.email}</div>
            <div className="nav flex gap-3 text-accent">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>
            <div className="login-btn flex gap-4">
                <img src={userIcon} alt="User" />
                {
                    user ?
                        (
                            <button onClick={handleLogOut} className='btn btn-primary px-10'>Log Out</button>
                        ) : (
                            <Link to='/auth/login' className='btn btn-primary px-10'>Login</Link>
                        )
                }

            </div>
        </div>
    );
};

export default Navbar;