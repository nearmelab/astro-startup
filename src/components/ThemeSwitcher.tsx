
import React, { useState, useEffect } from 'react';
import IconTablerSun from '~icons/tabler/sun';
import IconTablerMoon from '~icons/tabler/moon';

const ThemeSwitcher: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // On mount, read the theme from localStorage and the DOM
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const storedTheme = localStorage.getItem('theme');
    const isDark = storedTheme === 'dark' || (storedTheme === null && prefersDark);
    
    setIsDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newIsDarkMode = !document.documentElement.classList.contains('dark');
    
    // Update the DOM
    document.documentElement.classList.toggle('dark', newIsDarkMode);
    
    // Update React state
    setIsDarkMode(newIsDarkMode);
    
    // Persist preference
    localStorage.setItem('theme', newIsDarkMode ? 'dark' : 'light');
  };

  return (
    <button 
      onClick={toggleTheme}
      className="p-2 rounded-md text-dark-text dark:text-light-text hover:bg-light-bg dark:hover:bg-dark-bg focus:outline-none"
      aria-label="Toggle theme"
    >
      {isDarkMode ? (
        <IconTablerSun className="w-5 h-5 text-yellow-400" />
      ) : (
        <IconTablerMoon className="w-5 h-5 text-gray-500" />
      )}
    </button>
  );
};

export default ThemeSwitcher;
