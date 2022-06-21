import './HomeReview.css'

const HomeReviews = ({items}) => {
    const { img, name, rating, review } = items;
    return (
        <div className='review-container'>
            <div className='review-item'>
                <img src={img} alt="" />
            </div>
            <div>
                <h5>{name}</h5>
                <p><small>raing : {rating}</small></p>
                <p>{review}</p>
            </div>
        </div>
    );
}
export default HomeReviews;