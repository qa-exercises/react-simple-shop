import styles from './ItemCard.module.css'

const ItemCard = ({ name, price, imageUrl }) => {
  return (
    <div className={styles.wrapper}>
      <img src={imageUrl} width={200} alt={name} title={name} />
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.price}>£{price.toFixed(2)}</p>
    </div>
  )
}

export default ItemCard