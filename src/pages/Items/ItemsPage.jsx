import styles from './ItemsPage.module.css'
import itemsData from '../../data/items.json'
import ItemCard from '../../components/ItemCard'

const HomePage = () => {
  return (
    <>
      <h1 className={styles.header}>Find your perfect plant.</h1>
      <div className={styles['items-grid']}>
        {
          itemsData.map((item) => (
            <ItemCard {...item} key={item.id} />
          ))
        }
      </div>
    </ >
  )
}

export default HomePage