import React from 'react'
import errorImg from "./assets/404_page_cover.jpg";

const NoPage = () => {
    return (
        <div className='container p-5'>
            <img src={errorImg} alt="404 Error" className='w-50' />
        </div>
    )
}

export default NoPage