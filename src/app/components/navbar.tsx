import Link from 'next/link';

const Navbar = () => (
  <nav  className="navbar">
  <ul className="navbar-button">
         <li className="home"><Link href="/">Home</Link></li>
         <li className="Services"><Link href="/services">Services</Link></li>
         <li className="contact-us"><Link href="/about-me">About Me</Link></li>
   </ul>
  </nav>
);
export default Navbar