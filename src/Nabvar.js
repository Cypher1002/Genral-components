
import { Link } from "react-router-dom"
export default function Navbar() {

    return(<nav className="nav">
        <a href="/" className="site-title">site logo/name</a>
        <ul>
            <li>
                <Link to="/pricing">pricing</Link>
            </li>

            <li>
                <Link to="/about">About</Link>
            </li>
           {/* <CustomLink href='/'>Pricing</CustomLink>  */}
        </ul>
    </nav>
    )
}



//  function CustomLink({href,Children, ...props }) {
//      const path = window.location.pathname
//      return(
//          <li>
//         <Link to={href} {...props}>{Children}</Link>
//          </li>
//      )
//  }
