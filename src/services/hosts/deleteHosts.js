import hostData from "../../data/hosts.json" assert { type: "json" };

const deleteHost = (id) => {
    const index = hostData.hosts.findIndex((host) => host.id === id);

    if (index === -1) {
        throw new Error(`Host was not found`);
    }

    hostData.hosts.splice(index, 1);
    return id;
};

export default deleteHost;