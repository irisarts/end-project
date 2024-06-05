import propertyData from '../../data/properties.json' assert { type: 'json' }

const viewProperties = () => {
    return propertyData["properties"];
};

export default viewProperties;