import { checkUser, clearSession } from "../services/session"
import { admiBtn, mainPage, mainAdmi, tBodyProducts } from "./domElements"
import { showLogin } from "./loginView"
import { getAdmi } from "../services/products"
import { URL_API} from "../services/data"
import axios from "axios"


const inputName = document.querySelector('#name')
const inputPrice = document.querySelector('#price')
const inputAmount = document.querySelector('#amount')
const inputCategory = document.querySelector('#category')
const inputImagen = document.querySelector('#imagen')
const titleForm = document.querySelector('.subtitle');
const btnForm = document.querySelector('.form__btn');
const formNewProduct = document.getElementById('formNewProduct');

const API_ADMI = "http://localhost:5000/products/"; 

let isEdit = false;
let idProductEdit; 

export const chengePag = () => {
    const user = checkUser()

        admiBtn.addEventListener('click', ()=>{
            console.log(user);
            mainPage.classList.toggle('hidden')
            mainAdmi.classList.toggle('hidden')
            printAdmi(); 


        })
    
}

export const showAdmiBtn = () => {
    const user = checkUser()

    if(user.status === "admi") {
        admiBtn.classList.remove("hidden")
    } else {
        admiBtn.classList.add("hidden")
    }
}

const printAdmi = async () => {
  const traerProductsAdmi = await getAdmi(); 
  tBodyProducts.innerHTML ="";  
 traerProductsAdmi.forEach(product => {
        tBodyProducts.innerHTML += `
            <tr>
                <td>${product.name}</td>
                <td>${product.price}</td>
                <td>${product.amount}</td>
                <td>${product.categoryId}</td>
    
                <td>
                    <span class="edit" data-id="${product.id}">✏️</span>
                    <span class="delete" data-id="${product.id}">❌</span>
                </td>
            </tr>
            `
            
        })
    getElementsTable ()
}

// const editarProduct =() =>{
//     edit.addEventListener('click', ()=>{


//     })

// }


const handleSubmit = async () => {
    
    // if (!inputName.value || !inputPrice.value || !inputAmount.value || !inputCategory.value || !inputImagen.value) {
    //     alert('hay campos obligatorios por llenar')
    //     return
    // }

    const newProduct = {
        name: inputName.value,
        price: Number(inputPrice.value),
        amount: Number(inputAmount.value),
        categoryId: Number(inputCategory.value), 
        imagen: inputImagen.value, 
    }
    
    if (isEdit) {
        if(response.status == 200) {
            alert('Producto actualizado exitosamente')
            formNewProduct.reset()
        } else {
            alert('Hubo un error al guardar producto') 
        } const response = await updateProduct(newProduct);
       
    }else {
        
        const response = await saveProduct(newProduct);
        if(response.status == 201) {
            alert('Producto guardado exitosamente')
            formNewProduct.reset()
        } else {
            alert('Hubo un error al guardar producto') 
        }
    }

    getAdmi()
}

const updateProduct = async (product) => {
    try {
        const response = await fetch(`${API_ADMI}/${idProductEdit}`, {
            method: 'PATCH',
            body: JSON.stringify(product),
            headers: {
                "Content-type": "application/json"
            }
        })
        return response;
    } catch (error) {
        console.log(error);
        return error;
    }
}

const saveProduct = async (product) => {
    try {
        const response = await fetch(API_ADMI, {
            method: 'POST', 
            body: JSON.stringify(product),
            headers: {
                "Content-type": "application/json"
            }
        })
        return response
    } catch(error) {
        console.log(error)
        return error
    }
}

const handleDelete = async (id) => {
    console.log(id)
    const response = await fetch(`${API_ADMI}/${id}`, {
        method: 'DELETE',
    });
    if(response.status === 200) {
        alert('producto eliminado exitosamente')
    } else {
        alert('Hubo un error al eliminar productos')
    }

    getAdmi()
}

const handleEdit = async (id) => {
    isEdit = true;
    idProductEdit = id;
    
    //Get the product info
    const resp = await getAdmi();
    
    const product = resp[id-1];
    

    //Fill the form with the product
    inputName.value = product.name;
    inputAmount.value = product.amount;
    inputPrice.value = product.price;
    inputCategory.value = product.categoryId;
    inputImagen.value = product.imagen;

    titleForm.innerHTML = 'Actualizar producto';
    btnForm.innerHTML = 'Actualizar';
}

const getElementsTable = () => {
    const iconDelete = document.querySelectorAll('.delete');

    const iconEdit = document.querySelectorAll('.edit');

    iconDelete.forEach((element) => {
        const id = element.getAttribute('data-id');
        
        element.addEventListener('click', () => {
            console.log(id)
            handleDelete(id)
        })
    })

    iconEdit.forEach(element => {
        const id = element.getAttribute('data-id');
        element.addEventListener('click', () => {
            handleEdit(id)
        })
    });
}

export const llamar = () =>{

formNewProduct.addEventListener('submit', (event)=> {
    event.preventDefault()
    handleSubmit(event)
}

)

}


