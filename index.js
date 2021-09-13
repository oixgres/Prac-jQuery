function randNumber(min, max){
    return Math.floor(Math.random()*(max - min) + min)
}

function genRandomArray(min, max, stopAt){
    let array = []

    while(stopAt > 0){
        array.push(randNumber(min, max));
        stopAt--;
    }
    return array;
}

// Codigo para generar numeros aleatorios antes de cargar la pagina


// Codigo para generar numeros aleatorios al presionar un boton


// Codigo para cambiar color al presionar la tecla 'c'
