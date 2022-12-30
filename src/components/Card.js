import react from 'react';

export default function Card(props) {
    return(
        <div className="card-container">
            <div className="image-container">
                <img src={"./"+props.item.coverImg} className="review-image" />
                {props.item.openSpots === 0 ? <span className="review-status">sold out</span> : null}
            </div>
            <div className="review-bottom">
                <img src={props.item.star} className="review-star"/>
                <span className="review-score"> {props.item.stats.rating} </span>
                <span className="review-country">{"( "+props.item.stats.reviewCount+ " )"} {props.item.location}</span>
                <p className="review-description">{props.item.title}</p>
                <p className="review-price">From $ {props.item.price} / person</p>
            </div>
        </div>
    )
}

