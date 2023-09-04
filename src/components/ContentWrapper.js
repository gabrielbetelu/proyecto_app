import React from 'react'
import ContentRowTop from "./ContentRowTop";
import TopBar from "./TopBar";
import TableMovies from "./TableMovies";
import Footer from "./Footer";
import './contentWrapper.css'

function ContentWrapper() {


    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">

                {/*<!-- Main Content -->*/}
                <div id="content">
                    <TopBar/>
                    <ContentRowTop/>
                        
                </div>

                <div className='divTableMovies'>
                    <TableMovies/>
                </div>

                {/*<!-- End of MainContent -->*/}

                <Footer/>

            </div>
            {/*<!-- End of Content Wrapper -->*/}
				
        </React.Fragment>
        )
}

export default ContentWrapper


