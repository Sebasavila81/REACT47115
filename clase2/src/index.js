//1) IMPORTAR LIBRERIAS
//la libreria que define que es un componente y como funciona juntos los componentes
import React from "react";
//libreria que sabe como hacer que un componente aparezca en el navegador
import ReactDOM from "react-dom/client";

//2) OBETENES UNA REFERENCIA AL DIV CON ID ROOT
const el = document.getElementById("root");

//3) Le decimos a React que tome control del elemento
const root = ReactDOM.createRoot(el);

//4) Creamos componentes y mostramos el contenido
function App(){
    return <h1>Hola desde React</h1>
}

//5) Mostrar el component en pantalla
root.render(<App/>);


