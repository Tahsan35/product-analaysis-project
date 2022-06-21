
const HomeReviews = ({items}) => {
    const { img, name, rating, review } = items;
    return (
        <div>
            <img src={img} alt="" />
            <p>name:{name}</p>
            <p>rating: {rating} </p>
            <p>{review}</p>
        </div>
    );
};

export default HomeReviews;