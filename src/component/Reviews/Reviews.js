
const Reviews = ({reviews}) => {
    const { img, name, rating, review } = reviews;
    return (
        <div>
            <img src={img} alt="" />
            <p>name:{name}</p>
            <p>rating: {rating} </p>
            <p>{review}</p>
        </div>
    );
};

export default Reviews;