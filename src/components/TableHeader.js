import React from 'react'
import './tableMovies.css'


function TableHeader() {


    return (
        <React.Fragment>
            {/*<!-- Info Movies -->*/}
                <tr className='.rowStyle'>
                    <td className='titleColumn titleRowHeader'>Título</td>
                    <td className='lengthColumn titleRowHeader'>Duración</td>
                    <td className='ratingColumn titleRowHeader'>Rating</td>
                    <td className='genresColumn titleRowHeader'>Género</td>
                    <td className='awardsColumn titleRowHeader'>Premios</td>
                </tr>
                     
            {/*<!-- End of Info Movies -->*/}
        </React.Fragment>
        )
}

export default TableHeader