const user = {
    name: 'Rodrigo',
    lastName: 'Sundfeld Batista de Moraes'
};

function getUserWithFullName(user) {
    return {
        ...user,
        fullname: `${user.name} ${user.lastName}`
    }
}

const userWithFullName = getUserWithFullName(user);

console.log(userWithFullName);