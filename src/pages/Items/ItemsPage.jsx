import styles from './ItemsPage.module.css'
import itemsData from '../../data/items.json'
import ItemCard from '../../components/ItemCard'

const HomePage = () => {
  return (
    <div className={styles['page-wrapper']}>
      <h1>Find your perfect plant.</h1>
      <div className={styles['items-grid']}>
        {
          itemsData.map((item) => (
            <ItemCard {...item} key={item.id} />
          ))
        }
      </div>
    </div >
  )
}

export default HomePage