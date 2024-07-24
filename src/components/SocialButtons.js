import React from 'react';
import {
    faFacebookF,
    faLinkedinIn,
    faTwitter,
    faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag } from '@fortawesome/free-solid-svg-icons';
import { FACEBOOK, GITHUB, HASHNODE, LINKEDIN, TWITTER } from '../helpers';

const SocialButtons = () => {
    const socialLinks = [
        {
            name: 'Github',
            icon: faGithub,
            url: GITHUB,
        },
        {
            name: 'Linkedin',
            icon: faLinkedinIn,
            url: LINKEDIN,
        },
        {
            name: 'Hashnode',
            icon: faHashtag,
            url: HASHNODE,
        },
        {
            name: 'Facebook',
            icon: faFacebookF,
            url: FACEBOOK,
        },
        {
            name: 'Twitter',
            icon: faTwitter,
            url: TWITTER,
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
                            rel='noopener noreferrer' title={social.name}>
                            <FontAwesomeIcon icon={social.icon} />
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SocialButtons;
