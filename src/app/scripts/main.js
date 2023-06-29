import { printCategories } from './UI/printCategories.js'
import '../styles/styles.scss'
import { printProducts, printProductsFinder } from './UI/printProducts.js'
import { formLogin, inputSearch, login, shop } from './UI/domElements.js'
import { handleSubmit, loginView } from './UI/loginView.js'
import { shopReturn } from './UI/shopReturn.js'
import { verifySession } from './UI/shop.js'
import { chengePag, showAdmiBtn, llamar } from './UI/admin.js'

const currentView = localStorage.getItem('currentView')

document.addEventListener('DOMContentLoaded', () => {
    switch (true) {
        case !currentView:
            shop.classList.add('active-view-shop')
            login.classList.remove('active-view-login')
            break;
        case currentView === 'login':
            shop.classList.remove('active-view-shop')
            login.classList.add('active-view-login')
            break;
        default:
            break;
    }
})

formLogin.addEventListener('submit',(event) => {
    handleSubmit(event)
})

printCategories()
printProducts()
shopReturn()
verifySession()
showAdmiBtn()
inputSearch.addEventListener('keyup', printProductsFinder)
chengePag()
llamar() 