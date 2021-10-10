import React from "react";
import PropTypes from 'prop-types';


function TotalContentCard(props) {
    return(

        <div className="col-md-4 mb-4">
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className=""> {props.title}</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{props.quantity}</div>
                        </div>
                    </div>
                </div>
        </div>
    );

}
/* DEFINICIÓN DE PROPIEDADES POR DEFAULT */

TotalContentCard.defaultProps = {
    title: 'No Title',
    quantity: 'No quatity'

}

/* PROPTYPES */

TotalContentCard.propTypes = {
    atributes: PropTypes.shape({
        title: PropTypes.string.isRequired,
        quantity: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]).isRequired
    })
}


export default TotalContentCard;