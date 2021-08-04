import { Link } from 'react-scroll'
import './Navbar.css'


export default function Navbar(){
  return(
    <div className='Navbar'>
        <div className='logo'>D.Jas Tailors</div>
        <div className='navLinks'>
            <ul>
                <li><Link
                    className='link'
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={0}
                    duration={500}
                    delay={200}
                    isDynamic={true}
                    ignoreCancelEvents={false}
                    spythrottle={500}>Home
                    </Link>
                </li> 
                <li><Link 
                    className='link'
                    activeClass="active"
                    to="products"
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={0}
                    duration={500}
                    delay={200}
                    isDynamic={true}
                    ignoreCancelEvents={false}
                    spythrottle={500}>Products
                    </Link>
                </li>
                <li><Link 
                    className='link'
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={0}
                    duration={500}
                    delay={200}
                    isDynamic={true}
                    ignoreCancelEvents={false}
                    spythrottle={500}>About
                    </Link>
                </li>
                <li><Link 
                    className='link'
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={50}
                    duration={500}
                    delay={200}
                    isDynamic={true}
                    ignoreCancelEvents={false}
                    spythrottle={500}>Contact us
                </Link>
                </li>
            </ul>
        </div>
    </div>
);
}