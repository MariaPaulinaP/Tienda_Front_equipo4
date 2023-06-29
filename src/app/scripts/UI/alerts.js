import Swal from "sweetalert2"

export const alerts = (type) => {
    switch (type) {
        case 'emptyFields':
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Tienes campos por rellenar!'
            })
            break;
        case 'userExist':
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Usuario o contraseña incorrecta!'
            })
            break;
        default:
            break;
    }
}