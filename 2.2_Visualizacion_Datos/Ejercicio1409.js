/* Un boton y ese boton selecciona el sexo de las personas de la api y lo grafique */

let contF = 0;
let contM = 0;
let arregloLabels = ["Masculino", "Femenino"];
let arregloValores = [];
let genero;

const canvas = document.getElementById("chart").getContext("2d");

const data = {
    labels: arregloLabels,
    datasets: [
        {
            label: "Género",
            data: arregloValores,
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgb(54, 162, 235)',
                'rgb(255, 99, 132)'
            ],
            borderWidth: 1
        },
    ],
};

const config = {
    type: "bar",
    data: data,
    options: {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    },
};

const chart = new Chart(canvas, config);

const agregarFilaTabla = (nombre, genero) => {
    const tabla = document.getElementById("tablaPersonas").getElementsByTagName('tbody')[0];
    const fila = tabla.insertRow();
    const celdaNombre = fila.insertCell(0);
    const celdaGenero = fila.insertCell(1);
    celdaNombre.innerHTML = nombre;
    celdaGenero.innerHTML = genero;
};

const agregarPersona = () => {
    fetch("https://randomuser.me/api/")
      .then(response => response.json())
      .then(data => {
        const persona = document.getElementById("persona");
        const nombre = `${data.results[0].name.first} ${data.results[0].name.last}`;
        const genero = data.results[0].gender;
        
        agregarFilaTabla(nombre, genero);

        persona.innerHTML =
          `<img src="${data.results[0].picture.medium}" alt="Foto"> <h3>Nombre: ${nombre}, 
          Género: ${genero}</h3>`;
  
        if (genero === "male") {
          contM++;
        } else if (genero === "female") {
          contF++;
        }
  
        arregloValores = [contM, contF];
        chart.data.datasets[0].data = arregloValores;
        chart.update();
      });
};

document.getElementById("btnAgregar").addEventListener("click", agregarPersona);
