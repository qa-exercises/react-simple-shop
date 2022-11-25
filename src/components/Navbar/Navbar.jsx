import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeaf } from '@fortawesome/free-solid-svg-icons'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h2 className={styles.header}>
        seed <FontAwesomeIcon icon={faLeaf} /> theory
      </h2>
      <div className={styles['nav-link-wrapper']}>
        <Link to="/">Home</Link>
        <Link to="/items">Shop</Link>
        <Link to="/checkout">Checkout</Link>
      </div>
    </nav>
  )
}

export default Navbar