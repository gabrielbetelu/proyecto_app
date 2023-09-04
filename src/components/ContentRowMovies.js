import React from 'react'
import Cards from "./Cards";

let cardsInfo = [
    {
        title: "Movies in Data Base",
        color: "primary",
        quantity: 21,
        icon: "fa-film"
    },
    {
        title: "Total awards",
        color: "success",
        quantity: 79,
        icon: "fa-award"
    },
    {
        title: "Actors quantity",
        color: "warning",
        quantity: 49,
        icon: "fa-user"
    }
]

function ContentRowMovies() {


    return (
        <React.Fragment>
            {/*<!-- Content Row Movies-->*/}
            <div className="row">

                {/*<!{/*-- Movies in Data Base -->*/}
                {cardsInfo.map((card ,i)=><Cards key={card.title + i} {...card}/>)}
                
            </div>
            {/*<!-- End movies in Data Base -->*/}
        </React.Fragment>
        )
}

export default ContentRowMovies