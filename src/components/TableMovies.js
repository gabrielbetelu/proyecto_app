import React, { Component } from 'react'
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";


class InfoMovies extends Component {
    constructor (props) {
        super(props);
        this.state = {
            moviesInfo : []
        }
    }

    componentDidMount() {
        console.log("El componente se montó");
        fetch('/api/movies') 
            .then(respuesta => {
                return respuesta.json()
            })
            .then(data => {
                console.log(data.data)
                this.setState({
                    moviesInfo : data.data
                })
            })
            .catch (e => {console.log(e)})
        } 
        render(){
            return(
                <React.Fragment>
                    {/*<!-- Info Movies -->*/}            
                    <tbody className='rowStyle'>
                        <TableHeader/>
                        {console.log(this.state.moviesInfo)}
                        {this.state.moviesInfo.map((movie ,i)=><TableRow key={movie.title + i} {...movie}/>)}
                        <TableHeader/>
                    </tbody>                       
                    {/*<!-- End of Info Movies -->*/}
                </React.Fragment>
            )
        }

}

export default InfoMovies

