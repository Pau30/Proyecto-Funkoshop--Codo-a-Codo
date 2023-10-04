const add = document.querySelector('#agregar');
const substract = document.querySelector('#quitar');
const cantidad =document.querySelector('#cantidad');

console.log(add, substract,cantidad);
add.addEventListener('click', ()=> cantidad.value = Number(cantidad.value) +1 )
substract.addEventListener('click', ()=> {
    
    const cantidadInput = Number(cantidad.value); 

    if(cantidadInput <= 0){
        cantidad.value=0;
    }
    else{
        cantidad.value = cantidadInput - 1 
    }

})