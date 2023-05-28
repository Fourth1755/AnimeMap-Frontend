import './index.scss'
import {Link} from "react-router-dom";

const Navbar=()=>{
    return(
        <div className='navbar'>
            <div className='navbar-left'>
                <div className='navbar-logo'>
                    <h1 className='navbar-logo-text'><Link to='/' className="navbar-item-link">AniMap</Link></h1>
                </div>
                <div>
                    <ul className='navbar-item' >
                        <li className="navbar-item-li"><Link to='/' className="navbar-item-link">Home</Link></li>
                        <li className="navbar-item-li"><Link to="/allanime" className="navbar-item-link">Anime</Link></li>
                        <li className="navbar-item-li"><Link to="/topanime" className="navbar-item-link">Top Anime</Link></li>
                        <li className="navbar-item-li"><Link to="/mymap" className="navbar-item-link">My Map</Link></li>
                    </ul>
                </div>
            </div>
            <div className='navbar-right'>
            </div>
        </div>
    )
}
export default Navbar;