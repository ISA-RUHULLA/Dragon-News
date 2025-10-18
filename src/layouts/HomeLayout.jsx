import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import LetestNews from '../components/LetestNews';
import Navbar from '../components/Navbar';
import LeftAside from '../components/homelayouts/LeftAside';
import RightAside from '../components/homelayouts/RightAside';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header />
                <section className='w-11/12 mx-auto my-'><LetestNews/></section>
                <nav className='w-11/12 mx-auto my-3'>
                    <Navbar/>
                </nav>
            </header>
            <main className='w-11/12 mx-auto my-3 grid grid-cols-12 gap-5'>
                <aside className='col-span-3 sticky top-0 h-fit'>
                    <LeftAside/>
                </aside>
                <section className='main col-span-6'>
                    <Outlet />
                </section>
                <aside className='col-span-3 sticky top-0 h-fit'><RightAside/></aside>
            </main>
        </div>
    );
};

export default HomeLayout;