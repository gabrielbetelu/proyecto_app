import React from 'react'
import './tableMovies.css'
import PropTypes from 'prop-types';


function TableRow(props) {
    return (
        <React.Fragment>
            {/*<!-- Info Movies -->*/}
                <tr className='.rowStyle'>
                    <td className='titleColumn titleRow'>{ props.title }</td>
                    <td className='lengthColumn titleRow'>{ props.length }</td>
                    <td className='ratingColumn titleRow'>{ props.rating }</td>
                    <td className='genresColumn titleRow'>{ props.genre ?  props.genre.name : "Sin Género" }
                    {/*     <ul>
                        { props.genre.map((genre) => <li>{genre}</li>) }
                        </ul> 
                    */}   
                    </td>
                    <td className='awardsColumn titleRow'>{ props.awards }</td>
                </tr>
                     
            {/*<!-- End of Info Movies -->*/}
        </React.Fragment>
        )
}

export default TableRow

TableRow.propTypes = {
    atributes: PropTypes.shape({
        title: PropTypes.string.isRequired ,
        rating: PropTypes.number.isRequired ,
        awards: PropTypes.number.isRequired , 
        length: PropTypes.number.isRequired ,    
    })
}

TableRow.defaultProps = {
    title: "Sin Título" ,
    rating: 0 ,
    awards: 0 ,
    length: 0

}
  
