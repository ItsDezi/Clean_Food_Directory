/* eslint-disable react/react-in-jsx-scope */
import styles from '../styles/Navbar.module.css';
import { APP_TITLE } from '../Assets/constants';
function Footer() {
    return (
        <>
<footer className="background-color: #f8f9fa; padding: 20px; text-align: center; font-size: 14px; color: #6c757d;">
  <div>
    <h2>{APP_TITLE}</h2>
    <p>Empowering your journey to a healthier lifestyle.</p>
  </div>
  <div className="margin: 20px 0;">
  <ul className='footer-menu'>
            <li>
              <a href='/#map' className={`${styles.navLink}`}>Map</a>
            </li>
            <li>
              <a href='/contribute' className={`${styles.navLink}`}>Contribute</a>
            </li>
            <li>
              <a href='#home' className={`${styles.navLink}`}>All products</a>
            </li>
            <li>
              <a href='#home' className={`${styles.navLink}`}>Contact</a>
            </li>
          </ul>
  </div>
  <div>
    {/* <p>Contact us: <a href="mailto:support@example.com" className="color: #007bff;">support@example.com</a></p> */}
  </div>
  <div>
    <p>© 2024 {APP_TITLE}. All rights reserved.</p>
  </div>
</footer>

        </>
    )
}
export default Footer;