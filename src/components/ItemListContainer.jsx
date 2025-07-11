import '../styles/ItemListContainer.css'

const ItemListContainer = ({mensaje}) => {
  return(
    <div className="itemlist-container">
      <h2 className="title">{mensaje}</h2>
    </div>
  )
}

export default ItemListContainer