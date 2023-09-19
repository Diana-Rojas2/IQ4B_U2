/* let arreglo = [];
        let arreglo2 = [1, 2, 3, 4, 5];

        const valor = document.getElementById("txtValor");
        const lenguaje = document.getElementById("txtLenguaje");

        let arregloLabels = []; 
        let arregloValores = []; 
        let cont = 0;
        const btn = document.getElementById("btnAgregar"); */
//const canvas = document.getElementById("chart").getContext("2d");

/* EXPLICACION */
/*  const data = {
     labels: ["C#", "Java", "C++", "PHP", "JavaScript"],
     datasets: [{
         label: 'Lenguajes de programacion',
         data: [65, 59, 80, 81, 56],
         backgroundColor: [
             'rgba(255, 99, 132, 0.2)',
             'rgba(255, 159, 64, 0.2)',
             'rgba(255, 205, 86, 0.2)',
             'rgba(75, 192, 192, 0.2)',
             'rgba(54, 162, 235, 0.2)',

         ],
         borderColor: [
             'rgb(255, 99, 132)',
             'rgb(255, 159, 64)',
             'rgb(255, 205, 86)',
             'rgb(75, 192, 192)',
             'rgb(54, 162, 235)',
         ],
         borderWidth: 1
     }]
 }; */

/* const chart = new Chart(canvas, config);
btn.addEventListener("click", () => {
    arreglo.push(cont);
    cont++;
    console.log(arreglo);
    chart.update();
}); */

/* EJERCICIOS */

/* etiquetas y valores de forma dinamica  */
/* const data = {
    labels: arregloLabels,
    datasets: [{
        label: 'Lenguajes de programación',
        data: arregloValores,
        backgroundColor: [
 
            'rgba(54, 162, 235, 0.2)'
        ],
        borderColor: [

            'rgb(54, 162, 235)'
        ],
        borderWidth: 1
    }]
};

const config = {
    type: 'bar',
    data: data,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    },
};

btn.addEventListener("click", () => {
    const nuevoLenguaje = lenguaje.value;
    const nuevoValor = parseFloat(valor.value);
 
    if (nuevoLenguaje && !isNaN(nuevoValor)) {
        arregloLabels.push(nuevoLenguaje);
        arregloValores.push(nuevoValor);
 
        lenguaje.value = "";
        valor.value = "";
 
        chart.update();
    } else {
       
    }
});
*/
/* Agregar mas series con el mismo Label estatico, que cada que se pulse el boton Agregar
se agregue un valor ya establecito a una grafica nueva donde conincida el mismo label  */

/* etiquetas y valores de forma dinamica  */
// Variables para almacenar los valores de tacos, tlayoyos y quesadillas
// Variables para almacenar los valores de las series

let arregloLabels = [];
        let arregloValores = [];
        const btn = document.getElementById("btnAgregar");
        const canvas = document.getElementById("chart").getContext("2d");

        const data = {
        labels: arregloLabels,
        datasets: [],
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

        const colores = [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        ];

        let cont = 0;

        btn.addEventListener("click", () => {
        const serie = document.getElementById("txtLenguaje").value;
        const valor = parseFloat(document.getElementById("txtValor").value);

        if (!isNaN(valor) && serie.trim() !== "") {
            if (arregloLabels.includes(serie)) {
            const datasetIndex = data.datasets.findIndex(dataset => dataset.label === serie);
            data.datasets[datasetIndex].data.push(valor);
            } else {
            arregloLabels.push(serie);
            data.datasets.push({
                label: serie,
                data: [valor],
                backgroundColor: colores[cont % colores.length],
            });
            cont++;
            }
            chart.update();
            document.getElementById("txtLenguaje").value = "";
            document.getElementById("txtValor").value = "";
        } else {
            alert("Ingresa un valor numérico válido y un nombre de serie válido.");
        }
        });
