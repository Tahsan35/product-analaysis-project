import { useNavigate } from 'react-router-dom';
import HomeReviews from '../HomeReviews/HomeReviews';
import UseReviews from '../hooks/UseReviews';
import Photo from '../Images/bag.jpg';
const Home = () => {
    const [review] = UseReviews();
    let newReview = review.slice(0, 3);

    let navigate = useNavigate();
    const routeChange = () => {
        let path = '/reviews';
        navigate(path);
    }
    return (
        <section className="header-container container ">
            <div className='m-5 text-primary p-4 d-flex'>
                <div className="header-text">
                    <h4>Amazon Basics 15.6-Inch Laptop Computer and Tablet     Shoulder Bag Carrying Case, Black
                    </h4>
                    <br />
                    <h2 className='text-success font-monospace'>Make your life easier and stylies as well as carry on comfortable...</h2>
                    </div>
                <div className="header-img w-">
                    <img src={Photo}alt="" />
                </div>
            </div>
            <div>
                <h1 className='text-center'>Customers Reviews</h1>
                    <div>
                        {
                            newReview.map(items=> <HomeReviews
                                key={items.id}
                                items={items}>
                                </HomeReviews>)
                        }
                    </div>
                <div className='text-center m-4 p-4'>
                    <button onClick={routeChange} className='btn btn-primary'>See All Reviews</button>
                </div>
            </div>
        </section>
    );
};

export default Home;