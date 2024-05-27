import { useEffect, useState } from 'react';
import Icon from '../Icon';

export default function ModeSwitch({ initialDarkMode }) {
  const [darkMode, setDarkMode] = useState(initialDarkMode);
  const activateMode = async () => {
    if (darkMode === false) {
      document.body.classList.add('is-dark');
      document.body.classList.remove('is-light');
      await localStorage.setItem('ThemeTwo', 'dark_mode');
    }
    if (darkMode === true) {
      document.body.classList.remove('is-dark');
      document.body.classList.add('is-light');
      await localStorage.setItem('ThemeTwo', 'light_mode');
    }
    setDarkMode(!darkMode);
  };
  useEffect(() => {
    if (localStorage.getItem('ThemeTwo') === 'light_mode') {
      document.body.classList.remove('is-dark');
      document.body.classList.add('is-light');
      setDarkMode(false);
    }
    if (localStorage.getItem('ThemeTwo') === 'dark_mode') {
      document.body.classList.add('is-dark');
      document.body.classList.remove('is-light');
      setDarkMode(true);
    }
    if (!localStorage.getItem('ThemeTwo')) {
      if (darkMode) {
        localStorage.setItem('ThemeTwo', 'dark_mode');
      } else {
        localStorage.setItem('ThemeTwo', 'light_mode');
      }
    }
  }, [darkMode]);

  return (
    <button
      className={
        darkMode === true ? 'dark-mode-toggle dark-active' : 'dark-mode-toggle'
      }
      onClick={activateMode}
    >
      <Icon icon="sun-fill" className="off icon" />
      <Icon icon="moon-fill" className="on icon" />
    </button>
  );
}
