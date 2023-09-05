import React, { Component } from 'react'
import GenreCard from "./GenreCard";


class GenresInDb extends Component {
    constructor (props) {
        super(props);
        this.state = {
            genresInDb : []
        }
    }

componentDidMount() {
    console.log("El componente se montó");
    fetch('/api/genres') 
        .then(respuesta => {
            return respuesta.json()
        })
        .then(data => {
            console.log(data.data)
            this.setState({
                genresInDb : data.data
            })
        })
        .catch (e => {console.log(e)})
} 

    render(){
        return(
            <React.Fragment>
            {/*<!-- Genres in DB -->*/}
            <div className="col-lg-6 mb-4">						
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h5>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            {this.state.genresInDb.map((raw ,i) => <GenreCard key= {raw.name + i} {...raw}/>)}

                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
        )
    }

}

export default GenresInDb

