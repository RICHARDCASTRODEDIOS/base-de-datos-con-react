import React from "react";
import {ListaColaboradores} from "./listaColaboradores";
import {nanoid} from "nanoid";
import { useState } from "react";

const Main = (P) => {
    const [nuestroColaborador, setnuestroColaborador] = useState("");
    const [comoColaborador, setcomoColaborador] = useState("");
    const [Colaboradores, setColaboradores] = useState(ListaColaboradores);

    const agregarColaborador = (e) => {
        e.preventDefault();
        if (!nuestroColaborador.trim() || !comoColaborador.trim()) {
            // alert("llenarlos");
        } else {
            setColaboradores([...Colaboradores, { id: nanoid(), nombre: nuestroColaborador, correo: comoColaborador}]);
        }
    };

    return (
        <>
        <div className="container">
        <form onSubmit={agregarColaborador}>
        <input type="text"  className="form-control my-3" placeholder="Ingresar nombre del colaborador" 
        onChange={(e) => setnuestroColaborador(e.target.value)}/>
        <input type="text" className="form-control" placeholder="Ingresar correo del colaborador"
        onChange={(e) => setcomoColaborador(e.target.value)}/>

        <input type="submit" value="Agregar colaborador" className="btn btn-primary my-4"/>
        </form>
        <hr />
        <div>
        <h1>Listado de Colaboradores</h1>
        {Colaboradores.filter((el) => {
            if (P.final === "") {
                return el;
            } else if (el.nombre.toLocaleLowercase() .includes(P.final.toLocaleLowercase())) {
                return el;
            }    
        }) .map((el) => (
            <div key={el.id}>
                <p>
                    {el.nombre} - {el.correo}
                </p>
            </div>
        ))}
        </div>

        </div>
        </>
        );
    };

export default Main;