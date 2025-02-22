import React from 'react'
import { IoSearch } from "react-icons/io5";

const Banner = () => {
    return (
        <div>
            <div className='banner'>
                <img className=" img-fluid" src="./assets/Food_delivery_banner.jpg" />
                <div className='searchbar'>
                <button className='fs-5 form-control  bg-white border-0 border-rounded  d-flex '>
                    <input className="fs-5 form-control border-0 outline-none" type="text" placeholder='Search Restaurants / Food Items' />
                    <span className='p-2'><IoSearch /></span>
                </button>
                </div>
            </div>
        </div>
    )
}

export default Banner
