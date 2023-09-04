import React from 'react'
import './tableMovies.css'



function TableRow(props) {


    return (
        <React.Fragment>
            {/*<!-- Info Movies -->*/}
                <tr className='.rowStyle'>
                    <td className='titleColumn titleRow'>{ props.title }</td>
                    <td className='lengthColumn titleRow'>{ props.length }</td>
                    <td className='ratingColumn titleRow'>{ props.rating }</td>
                    <td className='genresColumn titleRow'>
                        <ul>
                        { props.genre.map((genre) => <li>{genre}</li>) }
                        </ul>    
                    </td>
                    <td className='awardsColumn titleRow'>{ props.awards }</td>
                </tr>
                     
            {/*<!-- End of Info Movies -->*/}
        </React.Fragment>
        )
}

export default TableRow