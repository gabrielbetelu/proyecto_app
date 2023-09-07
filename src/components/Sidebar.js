import React from 'react'
import { Route , Link , Switch } from 'react-router-dom'
import image from '../assets/images/logo-DH.png'
import ContentWrapper from "./ContentWrapper";
import GenresInDb from "./GenresInDb";
import LastMovieInDb from "./LastMovieInDb";
import ContentRowMovies from "./ContentRowMovies";
import NotFound from "./NotFound";

function Sidebar() {


    return (
        <React.Fragment>
        {/*<!-- Sidebar -->*/}
        <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

            {/*<!-- Sidebar - Brand -->*/}
            <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                <div className="sidebar-brand-icon">
                    <img className="w-100" src={image} alt="Digital House"/>
                </div>
            </Link>

            {/*<!-- Divider -->*/}
            <hr className="sidebar-divider my-0"/>

            {/*<!-- Nav Item - Dashboard -->*/}
            <li className="nav-item active">
                <Link className="nav-link" to="/">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard - DH movies</span></Link>
            </li>

            {/*<!-- Divider -->*/}
            <hr className="sidebar-divider"/>

            {/*<!-- Heading -->*/}
            <div className="sidebar-heading">Actions</div>

            {/*<!-- Nav Item - Pages -->*/}
            <li className="nav-item">
                <Link className="nav-link collapsed" to="/GenresInDb">
                    <i className="fas fa-fw fa-folder"></i>
                    <span>Genres In Data Base</span>
                </Link>
            </li>

            {/*<!-- Nav Item - Charts -->*/}
            <li className="nav-item">
                <Link className="nav-link" to="/LastMovieInDb">
                    <i className="fas fa-fw fa-chart-area"></i>
                    <span>Last Movie In Data Base</span></Link>
            </li>

            {/*<!-- Nav Item - Tables -->*/}
            <li className="nav-item">
                <Link className="nav-link" to="/ContentRowMovies">
                    <i className="fas fa-fw fa-table"></i>
                    <span>Content Movies Info</span></Link>
            </li>

            {/*<!-- Divider -->*/}
            <hr className="sidebar-divider d-none d-md-block"/>
        </ul>
        {/*<!-- End of Sidebar -->*/}

        <Switch>
            <Route path ='/' exact >
                    <ContentWrapper />               
            </Route>

            <Route path = '/GenresInDB' exact >
                    <GenresInDb />               
            </Route>

            <Route path = '/LastMovieInDB' exact >
                    <LastMovieInDb />               
            </Route>

            <Route path = '/ContentRowMovies' exact >
                    <ContentRowMovies />               
            </Route>
            <Route>
                <NotFound/>
            </Route>
        </Switch>
        
        
     </React.Fragment>)
}

export default Sidebar