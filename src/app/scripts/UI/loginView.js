
import { saveUser } from "../services/session"
import { getUsers } from "../services/users"
import { alerts } from "./alerts"
import { formLogin, login, passwordInput, shop, userInput } from "./domElements"
import { verifySession } from "./shop"
import { showShop } from "./showShop"


export const showLogin = () => {
    localStorage.setItem('currentView', 'login')
    shop.classList.remove('active-view-shop')
    login.classList.add('active-view-login')
}

export const handleSubmit = (event) => {
    event.preventDefault();
    validateUser()
}

const validateUser = async () => {
    const data = await getUsers(userInput.value, passwordInput.value);

    if (passwordInput.value === '' || userInput.value === '') {
        alerts('emptyFields')
    } else if (!data.length) {
        alerts('userExist')
    } else {
        saveUser(data[0])
        showShop()
        verifySession()
        formLogin.reset()
    }
}