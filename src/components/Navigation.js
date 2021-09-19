import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div className='navigation-bar'>
      <button className='buton'>
        <Link to='/' className='links'>
          Home
        </Link>
      </button>
      <button className='buton'>
        <Link to='/to-do-list' className='links'>
          To do List
        </Link>
      </button>
    </div>
  );
}

export default Navigation;
