function validar(form) {

    let num = form.num.value.trim()
    let letra = form.letra.value.trim()

    if (num == ""){
        alert("Ingrese los numeros de su DNI");
        return false;
    }
    if (num <= 0 || num > 99999999){
        alert("Ingrese un número valido");
        return false;
    }
    if (letra == ""){
        alert("Ingrese la letra de su DNI");
        return false;
    }
    if (letra.lenght() > 1){
        alert("Ingrese solo una letra");
        return false;
    }


    return true;
}