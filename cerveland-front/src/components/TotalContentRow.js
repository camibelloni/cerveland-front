import {React, Component} from "react";
import TotalContentCard from "./TotalContentCard";


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




class  TotalContentRow extends Component (){

    constructor (props) {
        super(props);

        this.state = {
            valor: " "
        };
    }   

    apiCall(url, consecuencia) {
        fetch(url)
        .then(response => response.json())
        .then(data => consecuencia(data))
        .catch(error => console.log(error))
    }

    traerCards(){
        this.apiCall('localhost:3005/api/users')
    }

    ComponentDidMount(){
        console.log("Me monté");
        this.traerCards();     
    }

    mostrarCard = (data) => {
        this.setState({
            card: data.count
        })
    }

    render(){

        let contenido

        if(this.state.valor == " ") {
            contenido = <h3>Cargando ...</h3>
        } else {

            contenido = <div className="row">
                
            {cardProps.map( (elem, i) => {
                console.log("Componente padreee")
                return <TotalContentCard {...elem} key={i}/>
            
            })}

        </div>
    
        }
    
            
    }

    
}

export default TotalContentRow;