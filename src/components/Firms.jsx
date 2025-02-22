import React, { useState } from 'react'
import { itemData } from '../data'
import { Link } from 'react-router-dom'

const Firms = () => {
    const [displayItem, setDisplayItem] = useState(itemData)


    return (
        <>
        <h1 className='fs-1 pt-4 text-dark'><b>Featured Food Items In Warangal</b></h1>
            <div className="itemSection d-flex overflow-auto p-2 " style={{ "scrollbarWidth": "" }}>
                {displayItem.map((item) => {
                    return (
                        <div className="gallery p-2 pb-0 ">
                            <Link to="/">
                            <img className="rounded " src={item.item_img} alt={item.item_img} />
                            </Link>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Firms