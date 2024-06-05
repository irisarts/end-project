import amenityData from '../../data/amenities.json' assert { type: 'json' }

const deleteAmenity = (id) => {
    const index = amenityData.amenities.findIndex((amenity) => amenity.id === id);

    if (index === -1) {
        throw new Error(`index was not defined`);
    }
  

    amenityData.amenities.splice(index, 1);

    return id;

};

export default deleteAmenity;