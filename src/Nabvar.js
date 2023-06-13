export default function Navbar() {
    return <nav className="nav">
        <a href="/" className="site-title">site logo/name</a>
        <ul>
            <li className="active">
                <a href="/pricing">pricing</a>
            </li>
            <li>
                <a href="/About">About</a>
            </li>
        </ul>
    </nav>
}