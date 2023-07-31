import { useState } from "react"


export default function Tour ({id,image,info,name,price,removeTour}){
    const [readMore, setreadMore] = useState(false)
    return (
        <article className="single-tour">
            <img src={image} alt={name} className="img" />
            <span className="tour-price">${price}</span>
            <div className="tour-info" >
                <h5>{name}</h5>
                <p>{readMore ? info : `${info.substring(0,200)}...`}
                <button type="button" className="info-btn" onClick={()=>{setreadMore(!readMore)}} >{readMore ? "show less":"read more"}</button>
                </p>
                <button type="button" className="btn btn-block delete-btn" onClick={() => removeTour(id)} >
                    not Interested
                </button>
            </div>
        
        </article>
    )
}