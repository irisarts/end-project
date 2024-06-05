import userData from '../../data/users.json' assert { type: 'json' }

const deleteUser = (id) => {
    const index = userData.users.findIndex((user) => user.id === id);

    if (index === -1) {
        throw new Error(`User with ${id} was not found`);
    }


    userData.users.splice(index, 1);
    return id;
};

export default deleteUser;