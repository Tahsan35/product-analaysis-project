import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
            <nav className='header'>
                <Link to ="/home">Home</Link>
                <Link to ="/reviews">Reviews</Link>
                <Link to ="/dashBoard" >DashBoard</Link>
                <Link to ='/blogs'>Blogs</Link>
            </nav>
        
    );
};

export default Header;