import React from 'react'
import PropTypes from 'prop-types';;

function GenreCard(props) {


    return (
        <React.Fragment>
            {/*<!{/*-- Movies in Data Base -->*/}
            <div className="col-lg-6 mb-4">
                <div className="card bg-dark text-white shadow">
                    <div className="card-body">
                        {props.name}
                    </div>
                </div>
            </div>
        </React.Fragment>
        )
}

export default GenreCard


GenreCard.propTypes = {
    atributes: PropTypes.shape({
        genre: PropTypes.string.isRequired        
    })
}

GenreCard.defaultProps = {
    genre: "Sin Genero"
}
  
