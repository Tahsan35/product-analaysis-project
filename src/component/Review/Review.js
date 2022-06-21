import UseReviews from '../hooks/UseReviews';
import Reviews from '../Reviews/Reviews';

const Review = () => {
    const [review] = UseReviews();
    return (
        <div>
            {
                review.map(reviews => <Reviews key={reviews.id}
                    reviews={reviews}></Reviews>)
            }
        </div>
    );
};

export default Review;