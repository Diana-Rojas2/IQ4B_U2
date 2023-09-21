const btn = document.getElementById("btn");
const p = document.getElementById("ubicacion");

function GetUbicacion() {
    if (navigator.geolocation) {
        //ToDo funcion de ubicacion
        navigator.geolocation.getCurrentPosition(success, error);
    } else {
        p.innerText = "La geolocalizacion no es soportada";
    }
}

function success(posicion) {
    /* latitud y longitud */
    p.innerHTML = `Latitud: ${posicion.coords.latitude} <br>
                Longitud: ${posicion.coords.longitude}`;
}

function error(err) {
    switch (err.code) {
        case err.PERMISSION_DENIED:
            p.innerHTML =
                "Permiso denegado a la ubicacion";
            break;
        case err.POSITION_UNAVAILABLE:
            p.innerHTML =
                "Ubicacion no disponible";
            break;
        case err.TIMEOUT:
            p.innerHTML =
                "Se agoto el tiempo de espera para la ubicacion";
            break;
        case err.UNKNOWN_ERROR:
            p.innerHTML =
                "Error desconocido";
            break;
    }
}

btn.addEventListener("click", () =>{
    GetUbicacion();
});