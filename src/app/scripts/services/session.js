
export const saveUser = (user) => {
    localStorage.setItem('currentUser', JSON.stringify(user))
}

export const checkUser = () => {
    const userExists = JSON.parse(localStorage.getItem('currentUser'))||{};
    return userExists;
}

export const clearSession = () => {
    localStorage.clear();
}