import { useState, useEffect } from "react";

// import '../styles/footer.scss';
const Button3 = () => {
    const [themeColor, setThemeColor]= useState(false);

    const handleChange = () =>{
        setThemeColor(!themeColor);
        if(themeColor){
            localStorage.setItem('Theme', 'color');
            document.body.classList.add('color-mode');
        }
        if(themeColor){
            // localStorage.setItem('Theme','dark');
            document.body.classList.remove('dark-mode');
            document.body.classList.remove('chery-mode');
            // document.body.classList.remove('dark-mode');
        }
    }

    useEffect(()=>{
        const getTheme = localStorage.getItem('Theme');
        if (getTheme === 'color') 
        return  document.body.classList.add('color-mode');
        if(getTheme === 'dark')
        return document.body.classList.remove('dark-mode');
    })
    return(
      <div>
          <button onClick={handleChange}>Color Mode</button>
      </div>
    )

  }
  export default Button3;