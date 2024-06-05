import amenityData from '../../data/amenities.json' assert { type: 'json' }

const getAmenityById = (id) => {
    const amenity = amenityData.amenities.find(amenity => amenity.id === id);

    if (!amenity) {
        throw new Error(`amenity was not defined`);
    }

    return amenity
}

export default getAmenityById;