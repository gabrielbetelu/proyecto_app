import React, { Component } from 'react'
import GenreCard from "./GenreCard";

let genresInDb = [
    {
        id: 1,
        genre: "Acción"
    },
    {
        id: 2,
        genre: "Animación"
    },
    {
        id: 3,
        genre: "Aventura"
    },
    {
        id: 4,
        genre: "Ciencia Ficción"
    },
    {
        id: 5,
        genre: "Comedia"
    },
    {
        id: 6,
        genre: "Documental"
    },
    {
        id: 7,
        genre: "Drama"
    },
    {
        id: 8,
        genre: "Fantasía"
    },
    {
        id: 9,
        genre: "Infantiles"
    },
    {
        id: 10,
        genre: "Musical"
    }
]


function GenresInDb() {


    return (
        <React.Fragment>
            {/*<!-- Genres in DB -->*/}
            <div className="col-lg-6 mb-4">						
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h5>
                    </div>
                    <div className="card-body">
                        <div className="row">

                        {genresInDb.map((raw ,i) => <GenreCard key= {raw.genre + i} {...raw}/>)}

                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
        )
}

export default GenresInDb