import React from 'react';
import {
    faFacebookF,
    faLinkedinIn,
    faTwitter,
    faGithub,
    faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialButtons = () => {
    const socialLinks = [
        {
            name: 'github',
            icon: faGithub,
            url: 'https://github.com/devsmranjan',
        },
        {
            name: 'linkedin',
            icon: faLinkedinIn,
            url: 'https://www.linkedin.com/in/devsmranjan',
        },
        {
            name: 'facebook',
            icon: faFacebookF,
            url: 'https://www.facebook.com/devsmranjan',
        },
        {
            name: 'instagram',
            icon: faInstagram,
            url: 'https://www.instagram.com/devsmranjan',
        },
        {
            name: 'twitter',
            icon: faTwitter,
            url: 'https://twitter.com/devsmranjan',
        },
    ];

    return (
        <div id='social-buttons' className='hidden md:flex'>
            <ul>
                {socialLinks.map((social, index) => (
                    <li key={index}>
                        <a
                            href={social.url}
                            target='_blank'
                            rel='noopener noreferrer'>
                            <FontAwesomeIcon icon={social.icon} />
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SocialButtons;
