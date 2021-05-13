import React from 'react'

const Title = ({ marginTop, text }) => {
    return (
        <div className="rating-modal_title" style={{marginTop: marginTop}}>{text}</div>
    )
}

export default Title