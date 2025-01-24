import {useState} from 'react';

// Este custom hook lo vamos a usar para gestionar gifs a la través de la API de Giphy 

export const useSearchGifs = () => {

    // Estado para gestionar el valor del input del usuario

    const [valorInput, setValorInput] = useState('');

    // Estado para guardar los gifs que nos devuelva la API

    const [gifs, setGifs] = useState([]);

    // Estado para indicar que la información se está cargando

    const [cargando, setCargando] = useState(false);

    const onChangeInput = (e) => {
        const valor = e.target.value; //obtener el valor del input
        setValorInput(valor); //actualiza el estado con el valor del input ingresado por el usuario
    }
    
    const getGifs = async (query) => {
        const key = "rX8tB4dTXM0oWqbQnVRG5Uoz0xbW31A4";
        const url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${query}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;

        //indicar que la aplicacion se esta cargando
        setCargando(true);

        //simular retraso de 1 segundo

        await new Promise((resolve) => {
            setTimeout(() => resolve(true), 1000);
        });

        //realizar la peticion a la API
        const response = await fetch(url);
        const data = await response.json();

        // Finaliza la indicacion de carga
        setCargando(false);

        console.log(data);

        // retornar el array de gifs

        return data.data; //devolver el arreglo de gifs
        
    }

    //funcion encargada de manejar el submit del usuario
    const handleOnSubmit = async (e) => {
        e.preventDefault(); //prevenimo el envio del formulario por defecto
        //llamar a la funcion que se encarga de pedir lo gifs
        const gifs = await getGifs(valorInput);
        console.log(gifs);
        setGifs(gifs) //actualizar el estado de los gifs con el array que nos da Giphy        
    }




// devolver los estados y funciones necesarios para interactuar con los componentes
    return {
        valorInput,
        onChangeInput,
        handleOnSubmit,
        gifs,
        cargando
    }
}
