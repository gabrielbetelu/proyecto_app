import React from 'react'
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

let moviesInfo = [
    {
        title: "Billy Elliot",
        length: 123,
        rating: 5,
        genre: ["Drama" , "Comedia"],
        awards: 2
    },
    {
        title: "Alicia en el país de las maravillas",
        length: 142,
        rating: 4,
        genre: ["Drama" , "Acción", "Comedia"],
        awards: 3
    }
]

function InfoMovies() {


    return (
        <React.Fragment>
            {/*<!-- Info Movies -->*/}            
            <table className='rowStyle'>
                <TableHeader/>
                {moviesInfo.map((movie ,i)=><TableRow key={movie.title + i} {...movie}/>)}
                <TableHeader/>
            </table>                       
            {/*<!-- End of Info Movies -->*/}
        </React.Fragment>
        )
}

export default InfoMovies