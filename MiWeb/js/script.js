const ingreso= document.getElementById('ingreso');

ingreso.addEventListener('click',()=>{
    var edad = parseInt(prompt("ingrese su edad"));
    if (edad>=18) {
        alert("Bienvenido");
    
    }
    else {alert ("Entre bajo su propio riesgo");
    }
});