import {Link, useNavigate} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faDiscord } from '@fortawesome/free-brands-svg-icons'

export function Navbar({mode, setMode}){
    const changeMode = ()=>{
        setMode(!mode)
    }
    return(
        <nav>
            <div>
                <p><Link to="/">W.</Link></p>
                <ul>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/members'>Team</Link></li>
                    <li><Link to='/challenges'>Challenges</Link></li>
                    <li><Link to='/posts'>Meetings</Link></li>
                </ul>
            </div>
            {/* <div className="horizontalLine"></div> */}
            <div className="allIcons">
                {/* <a href="https://discord.gg/tKGMpMjhtm"><FontAwesomeIcon icon={faDiscord}></FontAwesomeIcon></a>
                <a href="https://www.instagram.com/wangaractf/"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a> */}
                <a href="#" onClick={changeMode}><FontAwesomeIcon icon={faCog}></FontAwesomeIcon></a>
            </div>
        </nav>
    )
}