
const Reviews = ({reviews}) => {
    const { img, name, rating, review } = reviews;
    return (
        <div className="container">
            <div className='review-item'>
                <img src={img} alt="" />
            </div>
            <div>
                <p>name:{name}</p>
                <p>rating: {rating} </p>
                <p>{review}</p>
            </div>
        </div>
    );
};

export default Reviews;