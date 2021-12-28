import { useState, useEffect } from 'react';

const Button1 = () => {
    const [themeDefault, setThemeDefault] = useState(false);
    const handleChange = () => {
        setThemeDefault(!themeDefault);
        if (themeDefault) {
            localStorage.setItem('Theme', 'default');
        
            document.body.classList.remove('dark-mode');
            document.body.classList.remove('color-mode');
            document.body.classList.remove('chery-mode');
        }

    }
    useEffect(() => {
        const getTheme = localStorage.getItem('Theme');
        if (getTheme === 'dark')
            return document.body.classList.remove('dark-mode');
        
        if (getTheme === 'color')
            return document.body.classList.remove('color-mode');
        if (getTheme === 'chery')
            return document.body.classList.remove('chery-mode');
    })

    return (
        <div>
            <button onClick={handleChange}>Default Mode</button>
        </div>
    )
}

export default Button1;