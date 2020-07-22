import React from 'react';
import ButtonStyle1 from './ButtonStyle1';
// import { faCoffee } from '@fortawesome/fontawesome-free-solid';

const Intro = () => {
    return (
        <div className='flex container min-h-screen items-center m-auto pt-40 sm:pt-0 pb-8 sm:pb-0'>
            <div className='max-w-xl'>
                <h2 className='heading font-bold'>
                    Hello World,
                    <br />
                    I'm{' '}
                    <span className='text-secondary-dark'>Smruti Ranjan.</span>
                </h2>
                <p className='mt-8 leading-8 text-lg'>
                    I'm a self-taught developer, specializing in building (and
                    occasionally designing) fully fledged websites, mobile
                    applications, and everything in between.
                </p>

                <ButtonStyle1 />
            </div>
        </div>
    );
};

export default Intro;
