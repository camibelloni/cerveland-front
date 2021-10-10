import {React, Component} from "react";
import TotalContentCard from "./TotalContentCard";

//const fetch = require('node-fetch');


//Creamos set de datos a mostrar 

let totalUsers = {
    title: 'Total de usuarios',
    quantity: '5'

}

let totalProducts = {
    title: 'Total de productos',
    quantity: '100'

}

let totalProductCategories = {
    title: 'Cantidad de categorias',
    quantity: '2'

}

let cardProps = [totalUsers, totalProducts, totalProductCategories];


class  TotalContentRow extends Component {

    constructor (props) {
        super(props);

    //datos mutables
        this.state = {
            quantity: ''
        };
    }   

    //apiCall(url, consecuencia) {
      //   fetch(url)
        //.then(response => response.json())
        //.then(data => consecuencia(data))
        //.catch(error => console.log(error))
   // }

   // traerCards(){
     //   this.apiCall('localhost:3005/api/users')
   // }

    // Cuando el componente se acaba de mostrar en la pantalla, realizo la petición 

    componentDidMount(){

        fetch("http://localhost:3005/api/users")
        .then( (successRequest) => successRequest.json())
        .then( (jsonData) => {
            this.setState({quantity: jsonData.count})
        })
       // console.log("Me monté");
        ///this.traerCards();     
    }

    //mostrarCard = (data) => {
       // this.setState({
      //      card: data.count
      //  })
  //  }

    render(){
        return(

            <div className="col-md-4 mb-4">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <h3> Total de usuarios: </h3>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">{this.state.quantity}</div>
                            </div>
                        </div>
                    </div>
            </div>
        );
           
    }
    
}

export default TotalContentRow;