import {Link, useNavigate} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

export function Navbar(){
    return(
        <nav>
            <p>W.</p>
            <ul>
                <li><Link to='/'>Main page</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/members'>Team</Link></li>
                <li><Link to='/challenges'>Challenges</Link></li>
                <li><Link to='/posts'>Meetings</Link></li>
            </ul>
            <div className="horizontalLine"></div>
            <div className="allIcons">
                <a href=""><FontAwesomeIcon icon={faDiscord}></FontAwesomeIcon></a>
                <a href="https://www.instagram.com/wangaractf/"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>
            </div>
        </nav>
    )
}