import React from 'react';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';
import { FaSquareInstagram } from 'react-icons/fa6';
import swimmmingImage from "../../assets/swimming.png"
import classImage from '../../assets/class.png'
import playGround from '../../assets/playground.png'
import bgSponsored from '../../assets/bg.png'



const FindUs = () => {
    return (
        <div>
            <h2 className='font-bold my-5'>Find Us On</h2>
            <div className='flex flex-col gap-3'>
                <button className='social-btn '><FaFacebook />
                    Facebook</button>
                <button className='social-btn'><AiFillTwitterCircle />
                    Twitter</button>
                <button className='social-btn'><FaSquareInstagram />
                    Instagram</button>
            </div>
            <div className='bg-base-200 mt-3 p-5 '>
                <h2 className='font-bold'>Q-Zone</h2>
                <div>
                    <img src={swimmmingImage} alt="" />
                    <img src={classImage} alt="" />
                    <img src={playGround} alt="" />
                </div>
            </div>
            <div className='bg-base-200 mt-3 '>
                <div className='h-full bg-base-200'>
                    <img src={bgSponsored} alt="" />
                </div>
            </div>
        </div>
    );
};

export default FindUs;