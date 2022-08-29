import React from "react";
const Header = ({P}) => {
    return (
        
        <>
        <nav className="navbar navbar-expand-lg bg-dark mb-5 p-4">
            <div className="container">
                <h4 className="text-white">Buscar Colaboradores</h4>
                <form className="d-flex">
                    <input className="form-control me-2" type="text" placeholder="Busca un Colaborador"
                    onChange={(e) => {P.setTermino(e.target.value);
                    }}/>

                </form>

            </div>
        </nav>
        </>
    );
};

export default Header;