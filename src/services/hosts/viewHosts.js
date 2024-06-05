import hostData from '../../data/hosts.json' assert { type: 'json' }

const viewHosts = () => {
    return hostData["hosts"];
};

export default viewHosts;