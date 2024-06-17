import propertyData from '../../data/properties.json' assert { type: 'json' }

const viewProperties = (hostId, location, pricePerNight) => {
    let properties = propertyData["properties"];

    if (hostId) {
        properties = properties.filter(property => property.hostId === hostId);
     }

     if (location) {
        properties = properties.filter(property => property.location === location);
     }

     if (pricePerNight) {
        properties = properties.filter(property => Number(property.pricePerNight) === Number(pricePerNight));
     }
    return properties;
};

export default viewProperties;