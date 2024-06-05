import reviewData from "../../data/reviews.json" assert { type: "json" };

const deleteReview = (id) => {
    const index = reviewData.reviews.findIndex((review) => review.id === id);

    if (index === -1)  {
        throw new Error(`index was not defined`);
    }

    reviewData.reviews.splice(index, 1);
    return id;
}

export default deleteReview;