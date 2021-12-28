import { useState, useEffect } from "react";

// import '../styles/footer.scss';
const Button2 = () => {
    const [themeDark, setThemeDark]= useState(false);

    const handleChange = () =>{
        setThemeDark(!themeDark);
        if(themeDark){
            localStorage.setItem('Theme', 'dark');
            document.body.classList.add('dark-mode');
        }
        if(themeDark){
            // localStorage.setItem('Theme', 'color');
            document.body.classList.remove('color-mode');
            document.body.classList.remove('chery-mode');
        }
    }

    useEffect(()=>{
        const getTheme = localStorage.getItem('Theme');
        if (getTheme === 'dark') 
        return  document.body.classList.add('dark-mode');
        if(getTheme === 'color')
        return document.body.classList.remove('color-mode');
    })
    return(
      <div>
          <button onClick={handleChange}>Dark Mode</button>
      </div>
    )

  }
  export default Button2;