import reviewData from '../../data/reviews.json' assert { type: 'json' }

const getReviewById = (id) => {
    const review = reviewData.reviews.find(review => review.id === id);

    if (!review) {
        throw new Error(`review was not defined`);
    }

    return review
}

export default getReviewById;