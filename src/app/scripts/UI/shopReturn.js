import { returnBtn} from "./domElements"
import { showShop } from "./showShop"


export const shopReturn = () => {
    returnBtn.addEventListener('click', showShop)
}