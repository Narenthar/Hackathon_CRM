import React from 'react'



export default function FeaturedInfo({title,revenue,profit}) {
    return (
        <div className='featured'>
            <div className="featuredItem">
            <h3 className='featuredTitle'>{title}</h3>
            <div className="featuredMoneyContainer">
            <span className='featuredMoney'>{revenue} </span>
            <div><span className='featuredMoneyRate'>{profit}</span></div>
            </div>
            <span className="featuredSub">Compared to Last month</span>
            </div>
        </div>
    )
}
