import hostData from '../../data/hosts.json' assert { type: 'json' }

const getHostById = (id) => {
    const host = hostData.hosts.find(host => host.id === id);


    if (!host) {
        throw new Error(`Host was not found`);
    }
    return host
}

export default getHostById;