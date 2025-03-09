import { NavLink } from 'react-router-dom'
import './Header.css'

export default function Header() {




    return (
        <div className='Header'>
            <div>
                Company Meetings
            </div>  
            <div>
                <nav>
                    <NavLink to="/meetings/list">Meetings</NavLink>
                    <NavLink to="/meetings/add">Add Meeting</NavLink>
                </nav>
            </div>          
        
        </div>
    )
}