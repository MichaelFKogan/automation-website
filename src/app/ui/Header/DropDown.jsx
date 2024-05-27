'use client';
import { useState } from 'react';

export default function DropDown({ children, menuTitle, megaMenuClass }) {
  const [mobileToggle, setMobileToggle] = useState(false);
  const handelMobileToggle = () => {
    setMobileToggle(!mobileToggle);
  };
  return (
    <>
      <span
        className="nk-menu-link nk-menu-toggle"
        onClick={handelMobileToggle}
        style={{ cursor: 'pointer' }}
      >
        <span className="nk-menu-text">{menuTitle}</span>
      </span>
      <div
        className={
          megaMenuClass
            ? `nk-menu-dropdown ${megaMenuClass}`
            : 'nk-menu-dropdown'
        }
        style={{ display: `${mobileToggle ? 'block' : 'none'}` }}
      >
        {children}
      </div>
    </>
  );
}
