import userData from '../../data/users.json' assert { type: 'json' }

const getUserById = (id) => {
    const user = userData.users.find(user => user.id === id);

    if (!user) {
        throw new Error(`User with ${id} was not found`);
    }

    return user
}

export default getUserById;