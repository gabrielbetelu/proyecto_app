import React from 'react'
import PropTypes from 'prop-types';;

function Cards(props) {


    return (
        <React.Fragment>
            {/*<!{/*-- Movies in Data Base -->*/}
            <div className="col-md-4 mb-4">
                    <div className={`card border-left-${props.color} shadow h-100 py-2`}>
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">{props.title}</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">{props.quantity}</div>
                                </div>
                                <div className="col-auto">
                                    <i className={`fas ${props.icon} fa-2x text-gray-300`}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </React.Fragment>
        )
}

export default Cards

Cards.propTypes = {
    atributes: PropTypes.shape({
        title: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        quantity: PropTypes.oneOfType([PropTypes.string , PropTypes.number]),
        icon: PropTypes.oneOf(["fa-film" , "fa-award" , "fa-user"]).isRequired
    })
}

Cards.defaultProps = {
    title: "noName",
    quantity: 0,
    color: "primary",
    icon: "fa-user"
  }
  