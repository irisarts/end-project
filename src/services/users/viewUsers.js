import userData from '../../data/users.json' assert { type: 'json' }

const viewUsers = () => {
    return userData["users"];
};

export default viewUsers;

