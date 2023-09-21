/*                  EXPLICACION DE CLASE 19/09/2023                  */

/* const btn = document.getElementById("btn");
let nombres = []; */

/* async function Get() { */
/*     fetch("")
    .then(respuesta=>respuesta.json())
    .then.apply(json=>{}); */
/* try {
    const respuesta = await fetch("https://randomuser.me/api/");
    const json= await respuesta.json();
    const nombre =json.results[0].name.first;
    alert(nombre); */
/* alert(json.results[0].name.first); */
/* nombres.push(nombre);
console.log(nombres);
} catch (error) {
alert("Error al procesar la respuesta");
}
}
btn.addEventListener("click",function(){
Get();
 
});  */

/*                  Ejercicio 20/09/2023                   */
/* que cada que se pulse mostrar que agregue una card con el nombre de la perona, su foto y otra informacion*/

const agregarPersona = () => {
    fetch("https://randomuser.me/api/")
        .then(response => response.json())
        .then(data => {
            const tarjetas = document.getElementById("tarjetas");
            const nombre = `${data.results[0].name.first} ${data.results[0].name.last}`;
            const nuevaTarjeta = document.createElement("div");
            nuevaTarjeta.className = "card d-inline-block";
            nuevaTarjeta.style.width = "14rem";
            nuevaTarjeta.style.margin = "5px";
            nuevaTarjeta.innerHTML =
                `<div class="card" style="width: 14rem;">
                    <img src="${data.results[0].picture.large}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${nombre}</h5>
                        <p class="card-text">
                        Ciudad: ${data.results[0].location.city} <br>
                        Estado: ${data.results[0].location.state}<br>
                        Pais: ${data.results[0].location.country}</p>
                        <a href="#" class="btn btn-primary" style="display: flex; justify-content: center;
                        align-items: center">- Hola -</a>
                    </div>
                </div>`;
            tarjetas.appendChild(nuevaTarjeta);
        });
};
document.getElementById("btn").addEventListener("click", agregarPersona);
