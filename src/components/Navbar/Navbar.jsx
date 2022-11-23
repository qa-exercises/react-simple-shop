import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.header}>plant 🌱 theory</h1>
      <div className={styles['nav-link-wrapper']}>
        <a>Home</a>
        <a>Shop</a>
        <a>Cart</a>
      </div>
    </nav>
  )
}

export default Navbar