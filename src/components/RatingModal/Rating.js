import React from 'react'

const Rating = ({ items, setRating }) => {
    const listItems = items.map((val) =>
        <div onClick={() => setRating(3)} key={val} className="item">{val}</div>
    )
    
    return (
        <div className="rating">{listItems}</div>
    )
}

export default Rating