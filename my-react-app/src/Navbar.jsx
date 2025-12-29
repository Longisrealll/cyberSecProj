import {Link, useNavigate} from 'react-router-dom';
export function Navbar(){
    return(
        <nav>
            <ul>
                <li><Link to='/'>Main page</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/members'>Team</Link></li>
                <li><Link to='/challenges'>Challenges</Link></li>
                <li><Link to='/posts'>Meetings</Link></li>
            </ul>
        </nav>
    )
}