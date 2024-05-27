'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import ModeSwitch from '../ModeSwitch';
import ModeSwitchDark from '../ModeSwitchDark';
import Button from '../Button';
import DropDown from './DropDown';
import { usePathname } from 'next/navigation';
import Logo from '../Logo';
import Icon from '../Icon';

export default function Header({
  darkMode,
  varient,
  logoUrl,
  darkLogoUrl,
  language,
  loginBtn,
  actionBtnText,
  actionBtnUrl,
  actionBtnClass,
  menuPosition,
}) {
  const pathname = usePathname();
  const [mobileToggle, setMobileToggle] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isLanguage, setIsLanguage] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    });
  }, []);
  return (
    <header
      className={`nk-header-main nk-menu-main will-shrink ignore-mask ${
        mobileToggle ? 'header-menu-shown' : ''
      } ${varient ? varient : ''} ${isSticky ? 'has-fixed' : ''}`}
    >
      <div className="container">
        <div className="nk-header-wrap">
          <div className="nk-header-logo">
            <Logo logoUrl={logoUrl} darkLogoUrl={darkLogoUrl} href="/" />
          </div>
          <div className="nk-header-toggle">
            {darkMode ? (
              <ModeSwitchDark initialDarkMode={darkMode} />
            ) : (
              <ModeSwitch initialDarkMode={darkMode} />
            )}
            <button
              className="btn btn-light btn-icon header-menu-toggle"
              onClick={() => !setMobileToggle(!mobileToggle)}
            >
              <Icon icon="menu" className="icon" />
            </button>
          </div>
          {mobileToggle && (
            <div
              className="header-menu-overlay"
              onClick={() => setMobileToggle(!mobileToggle)}
            />
          )}
          <nav
            className={`nk-header-menu nk-menu ${
              mobileToggle ? 'header-menu-active' : ''
            }`}
          >
            <ul
              className={`nk-menu-list ${
                menuPosition ? menuPosition : 'mx-auto'
              }`}
            >
<li>
              <Link href="#home" className="nk-menu-link">
                  <span className="nk-menu-text">Home</span>
              </Link>
              </li>
              <li>
              <Link href="#usecases" className="nk-menu-link">
                  <span className="nk-menu-text">Use Cases</span>
              </Link>
              </li>
              <li>
              <Link href="#aichatbot" className="nk-menu-link">
                  <span className="nk-menu-text">AI Chat Bot</span>
              </Link>
              </li>
              <li>
              <Link href="#roadmap" className="nk-menu-link">
                  <span className="nk-menu-text">Roadmap</span>
              </Link>
              </li>
              <li>
              <Link href="#contact-us" className="nk-menu-link">
                  <span className="nk-menu-text">Contact</span>
              </Link>
</li>
            </ul>



            <div className="mx-2 d-none d-lg-block">
              {darkMode ? (
                <ModeSwitchDark initialDarkMode={darkMode} />
              ) : (
                <ModeSwitch initialDarkMode={darkMode} />
              )}
            </div>



            <ul className="nk-menu-buttons flex-lg-row-reverse">


              <li>
                <Button
                  href="#contact-us"
                  btnText="Contact"
                  btnClass={actionBtnClass}
                />
              </li>

            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
