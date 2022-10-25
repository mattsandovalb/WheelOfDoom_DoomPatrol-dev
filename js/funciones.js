//Array que sacaremos de json.
var array = [{
    "id":0,
    "nombre":"Eduard"},{
    "id":1, 
    "nombre": "Judith"},{
    "id":2,
    "nombre":"Albert"},];

//Array de los muertos
var muertos = [];
//Variable que utilizamos para sacar el objeto
var numero = seleccion(array);
    

        //Coge solo el id del objeto que vamos a matar/selecionar.
        function seleccion(array) {

            //Coge el objeto de la lista
            let random = Math.floor(Math.random()*array.length); //Cogemos un numero random.
            let sacrificio = array.find(array => array.id === random);//Buscamos en la lista el id que sea igual al numero random.

            //Vemos el objeto seleccionado
            //console.log(sacrificio)

            //Cogemos solo el id del objeto.
            let indice = sacrificio.id;

            //Devolvemos el id.
            return indice;
        };

        //Borrar el objeto de la lista.
        function kill(array,numero){
            //Mediante un filtro borramos el objeto deseado de la lista.
            let killer = array.filter((array) => array.id !== numero);

            //Devolvemos el resto de la lista sin el objeto.
            return killer;
        }

        //Creamos una lista para los muertos.
        function listaDeMuertos(array,numero){
            let sacrificio = array.find(array => array.id === numero);//Utilizamos la variable numero para seleccionar el mismo objeto.

            return sacrificio;
        }


        //Metemos el objeto/nombre en la lista nueva.
        muertos.push(listaDeMuertos(array,numero));
        //Borramos el objeto/nombre de la lista
        array = kill(array,numero);

        console.log(muertos)

        console.log(array)