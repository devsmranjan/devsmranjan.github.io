import React, { useState, useEffect } from 'react';

const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isScrolledPhase2, setIsScrolledPhase2] = useState(false);

    // let prevScrollpos = window.pageXOffset;
    // const [prevScrollpos, setPrevScrollpos] = useState(window.pageXOffset);

    useEffect(() => {
        const logo_icon_paths = document.querySelectorAll('.logo-icon path');

        for (let i = 0; i < logo_icon_paths.length; i++) {
            const elementLength = logo_icon_paths[i].getTotalLength();

            logo_icon_paths[i].style.setProperty(
                'stroke-dasharray',
                elementLength
            );
            logo_icon_paths[i].style.setProperty(
                'stroke-dashoffset',
                elementLength
            );
            logo_icon_paths[i].style.setProperty(
                'animation',
                'logo-line-animation 1s ease-out forwards'
            );
        }

        const logo_icons = document.querySelectorAll('.logo-icon');
        logo_icons.forEach((logo_icon) => {
            logo_icon.style.setProperty(
                'animation',
                'logo-icon-bg-animation 1s ease forwards 1s'
            );
        });

        var prevScrollpos = window.pageYOffset;

        window.addEventListener('scroll', (event) => {
            if (window.scrollY > 32 || window.scrollY > 32) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }

            var currentScrollPos = window.pageYOffset;

            if (prevScrollpos > currentScrollPos) {
                setIsScrolledPhase2(true);
            } else {
                setIsScrolledPhase2(false);
            }
            prevScrollpos = currentScrollPos;

            // if (window.scrollY > 80 || window.scrollY > 80) {
            //     setIsScrolledPhase2(true);
            // } else {
            //     setIsScrolledPhase2(false);
            // }
        });
    }, []);

    return (
        <header
            className={`fixed w-full bg-primary-dark transition-all duration-500 ${
                !isScrolled ? 'shadow-none' : 'shadow-lg'
            } ${isScrolled && !isScrolledPhase2 ? 'hide-on-scroll' : 'show-on-scroll'}`}>
            {}
            <nav
                id='navbar'
                className={`container flex items-center justify-between transition-all duration-100 ${
                    !isScrolled ? 'py-4 md:py-8' : 'py-4 md:py-4'
                }`}>
                <a href='#!' className=''>
                    {
                        <svg
                            className='logo-icon hidden md:block'
                            width='49'
                            height='68'
                            viewbox='0 0 49 68'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path
                                d='M23.083 1.48798L23.083 1.48796C23.7336 0.837346 24.7894 0.837346 25.44 1.48796L27.959 4.00692C28.6087 4.65666 28.6099 5.70924 27.9618 6.36111C27.9617 6.3612 27.9616 6.36129 27.9615 6.36138L10.8469 23.5549L10.1447 24.2604L10.8468 24.9658L27.9607 42.1608L27.9608 42.1609C28.6093 42.8122 28.6082 43.8647 27.9579 44.515L25.4389 47.034C24.7883 47.6846 23.7325 47.6846 23.0819 47.034L1.48798 25.4389L1.48796 25.4389C0.837352 24.7883 0.837346 23.7326 1.48794 23.0819C1.48795 23.0819 1.48796 23.0819 1.48796 23.0819L23.083 1.48798Z'
                                stroke='#4FF0C9'
                                stroke-width='2'
                            />
                            <path
                                d='M25.6977 66.1454L25.6977 66.1454C25.0471 66.796 23.9913 66.796 23.3407 66.1454L20.8217 63.6264C20.172 62.9767 20.1708 61.9241 20.8189 61.2722C20.819 61.2721 20.8191 61.272 20.8192 61.272L37.9338 44.0784L38.636 43.373L37.9339 42.6675L20.82 25.4725L20.8199 25.4724C20.1714 24.8211 20.1725 23.7686 20.8228 23.1183L23.3418 20.5993C23.9924 19.9487 25.0482 19.9487 25.6988 20.5993L47.2927 42.1944L47.2927 42.1944C47.9433 42.845 47.9434 43.9008 47.2928 44.5514C47.2928 44.5514 47.2927 44.5514 47.2927 44.5514L25.6977 66.1454Z'
                                stroke='#4FF0C9'
                                stroke-width='2'
                            />
                        </svg>
                    }
                    {
                        <svg
                            className='logo-icon block md:hidden'
                            width='33'
                            height='46'
                            viewBox='0 0 33 46'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path
                                d='M15.6241 1.22769L15.6242 1.22767C15.9277 0.92411 16.4205 0.92411 16.7241 1.22767L18.4033 2.90695C18.7065 3.21009 18.7072 3.70136 18.4044 4.00578L6.99489 15.4679L6.2927 16.1733L6.99485 16.8788L18.4039 28.3419L18.4041 28.3421C18.7066 28.6459 18.7062 29.1369 18.4026 29.4405L16.7233 31.1198C16.4198 31.4234 15.927 31.4234 15.6234 31.1198C15.6234 31.1198 15.6234 31.1198 15.6234 31.1198L1.22769 16.7233L1.22767 16.7233C0.924116 16.4198 0.92411 15.927 1.22765 15.6234C1.22766 15.6234 1.22766 15.6234 1.22767 15.6234L15.6241 1.22769Z'
                                stroke='#4FF0C9'
                                stroke-width='2'
                            />
                            <path
                                d='M16.8958 43.8605L16.8958 43.8606C16.5923 44.1641 16.0995 44.1641 15.7959 43.8606L14.1166 42.1813C13.8135 41.8781 13.8128 41.3869 14.1156 41.0824L25.5251 29.6203L26.2273 28.9149L25.5251 28.2094L14.1161 16.7463L14.1159 16.7461C13.8134 16.4423 13.8138 15.9513 14.1174 15.6477L15.7967 13.9684C16.1002 13.6649 16.593 13.6648 16.8965 13.9684C16.8966 13.9684 16.8966 13.9684 16.8966 13.9684L31.2923 28.3649L31.2923 28.3649C31.5959 28.6685 31.5959 29.1612 31.2923 29.4648C31.2923 29.4648 31.2923 29.4648 31.2923 29.4648L16.8958 43.8605Z'
                                stroke='#4FF0C9'
                                stroke-width='2'
                            />
                        </svg>
                    }

                    {
                        // <svg
                        //     id='logo-icon'
                        //     className="block md:hidden"
                        //     width='38'
                        //     height='53'
                        //     viewBox='0 0 38 53'
                        //     fill='none'
                        //     xmlns='http://www.w3.org/2000/svg'>
                        //     <path
                        //         d='M17.9191 1.30777L17.9191 1.30776C18.3294 0.897415 18.9954 0.897415 19.4058 1.30776L21.3434 3.24539C21.7532 3.65519 21.7541 4.31923 21.3449 4.73055L8.18007 17.9561L7.47787 18.6615L8.18002 19.367L21.3443 32.5937L21.3445 32.5939C21.7535 33.0046 21.7528 33.6684 21.3426 34.0786L19.4049 36.0163C18.9946 36.4266 18.3286 36.4266 17.9182 36.0163L1.30777 19.4049L1.30776 19.4049C0.897421 18.9946 0.897415 18.3286 1.30774 17.9183C1.30774 17.9183 1.30775 17.9182 1.30776 17.9182L17.9191 1.30777Z'
                        //         stroke='#4FF0C9'
                        //         stroke-width='2'
                        //     />
                        //     <path
                        //         d='M19.604 50.7171L19.604 50.7171C19.1936 51.1275 18.5276 51.1275 18.1173 50.7171L16.1797 48.7795C15.7699 48.3697 15.769 47.7056 16.1781 47.2943L29.343 34.0688L30.0452 33.3633L29.343 32.6579L16.1788 19.4312L16.1786 19.431C15.7696 19.0203 15.7702 18.3565 16.1805 17.9462L18.1181 16.0086C18.5285 15.5983 19.1945 15.5983 19.6048 16.0086L36.2153 32.6199L36.2153 32.6199C36.6257 33.0303 36.6257 33.6963 36.2153 34.1066C36.2153 34.1066 36.2153 34.1066 36.2153 34.1066L19.604 50.7171Z'
                        //         stroke='#4FF0C9'
                        //         stroke-width='2'
                        //     />
                        // </svg>
                    }
                </a>
                <div id='toggle'></div>
            </nav>
        </header>
    );
};

export default NavBar;
