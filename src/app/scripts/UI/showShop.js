import { login, shop } from "./domElements"
import { verifySession } from "./shop"

export const showShop = () => {
    localStorage.removeItem('currentView')
    shop.classList.add('active-view-shop')
    login.classList.remove('active-view-login')
    verifySession()
}