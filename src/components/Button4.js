import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';

const Button4 = () => {
    const [themeChery, setThemeChery] = useState(false);
    const handleChange = () => {
        setThemeChery(!themeChery);
        if (themeChery) {
            localStorage.setItem('Theme', 'chery');
            document.body.classList.add('chery-mode');

            document.body.classList.remove('color-mode');
            document.body.classList.remove('dark-mode');
        }
    }
    useEffect(() => {
        const getTheme = localStorage.getItem('Theme');
        if (getTheme === 'dark')
            return document.body.classList.remove('dark-mode');
        if (getTheme === 'color')
            return document.body.classList.remove('color-mode');
        if (getTheme === 'default')
            return document.body.classList.remove('default-mode');
    })


    return (
        <div>
            <button onClick={handleChange}>Chery Mode</button>
        </div>
    )
}
export default Button4;