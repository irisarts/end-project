import propertyData from '../../data/properties.json' assert { type: 'json' }


const getPropertyById = (id) => {
    const property = propertyData.properties.find(property => property.id === id);
console.log(property)
    if (!property) {
        throw new Error(`property was not defined`);
    }
    return property
}

export default getPropertyById;