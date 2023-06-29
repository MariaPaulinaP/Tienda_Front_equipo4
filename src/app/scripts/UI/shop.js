import { checkUser, clearSession } from "../services/session"
import { loginBtn, title } from "./domElements"
import { showLogin } from "./loginView"

export const verifySession = () => {
    const user = checkUser()

    if(user?.name) {
        loginBtn.innerHTML = 'Cerrar Sesión'
        loginBtn.addEventListener('click', () => {
            clearSession()
            showLogin()
        })
        title.innerHTML = `
        Bienvenido/a ${user.name}
        `
        title.classList.remove('hidden')
    } else {
        loginBtn.innerHTML = 'Iniciar Sesión'
        loginBtn.addEventListener('click', showLogin)
        title.innerHTML = ''
        title.classList.add('hidden')
    }
}