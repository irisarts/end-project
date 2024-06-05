import propertyData from '../../data/properties.json' assert { type: 'json' }

const deleteProperties = (id) => {
    const index = propertyData.properties.findIndex((property) => property.id === id);

    if (index === -1) {
        throw new Error(`index was not defined`);
    }

    propertyData.properties.splice(index, 1);
    return id;
};

export default deleteProperties;