import React, {useState} from 'react'
import { itemData } from '../data'
import { Link } from 'react-router-dom'

const ItemsDisplay = () => {
    const [displayItem, setDisplayItem] = useState(itemData)


  return (
        <div className="itemSection d-flex overflow-auto scrollbar-width-none p-2">
            {displayItem.map((item)=>{
                return(
                    <Link to="/">
                    <div className="gallery p-1">
                        <img className="img-fluid rounded-circle " src={item.item_img} alt={item.item_img} />
                    </div>
                    </Link>
                )
            })}
        </div>
  )
}

export default ItemsDisplay