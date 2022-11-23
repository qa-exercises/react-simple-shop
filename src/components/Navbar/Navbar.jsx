import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.header}>seed 🌱 theory</h1>
      <div className={styles['nav-link-wrapper']}>
        <a href="/">Home</a>
        <a href="/items">Shop</a>
        <a href="/checkout">Cart</a>
      </div>
    </nav>
  )
}

export default Navbar