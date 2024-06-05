import reviewData from '../../data/reviews.json' assert { type: 'json' }

const viewReviews = () => {
    return reviewData["reviews"];
};

export default viewReviews;