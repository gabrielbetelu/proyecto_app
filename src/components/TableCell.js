import React from 'react'

function TableCell(props) {


    return (
        <React.Fragment>
            {/*<!-- Info Movies -->*/}
                
                <td className= {props.className}>{props.content}</td>
                    
                     
            {/*<!-- End of Info Movies -->*/}
        </React.Fragment>
        )
}

export default TableCell