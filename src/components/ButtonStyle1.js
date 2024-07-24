import React from 'react';
import { RESUME } from '../helpers';

const ButtonStyle1 = () => {

    return (
        <div className='mt-8'>
            <a
                className='btn transition duration-300 ease-in-out hover:bg-secondary-faded  btn-style-1 py-2 px-10 rounded border border-secondary-dark font-fira_mono text-secondary-dark'
                href={RESUME}
                download="Smruti_Ranjan_Rana_Resume"
            >
                RESUME
            </a>
        </div>
    );
};

export default ButtonStyle1;
