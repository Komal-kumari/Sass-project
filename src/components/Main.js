
import '../styles/main.scss';
import Button from './Button';
const Main = () => {
    return (
        <div>
            <div className='row'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.</p>                    
                <div className='column1'>
                    Select Theme:
                </div>
                <div className='column2'>
                    <select>
                        <option>Theme1</option>
                        <option>Theme2</option>
                        <option>Theme3</option>
                        <option>Theme4</option>
                    </select>
                </div>               
            </div>
            <Button/>
        </div>
    )
}
export default Main;