
export const saveUser = (user) => {
    sessionStorage.setItem('currentUser', JSON.stringify(user))
}

export const checkUser = () => {
    const userExists = JSON.parse(sessionStorage.getItem('currentUser'))||{};
    return userExists;
}

export const clearSession = () => {
    sessionStorage.clear();
}