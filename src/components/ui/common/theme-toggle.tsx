import { useContext } from 'react';
import ThemeContext from '../theme/ThemeContext';

import { FaSun, FaMoon } from 'react-icons/fa';

export default function ThemeToggle({ ...props }) {
  const { dark, toggleDark } = useContext(ThemeContext);
  return (
    <button
      className="text-gray-800 bg-transparent cursor-pointer hover:text-indigo-500 dark:text-gray-200 dark:hover:text-indigo-300 focus:outline-none"
      onClick={() => toggleDark()}
      type="button"
      {...props}
    >
      {dark ? <FaSun size="2em" /> : <FaMoon size="1.6em" />}
    </button>
  );
}
