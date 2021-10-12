import {React, Component} from "react";
import TotalCard from "./TotalCard";
import './TotalCardsRow.css';


class  TotalProducts extends Component {

    constructor (props) {
        super(props);

    //datos mutables
        this.state = {
            
            productsQuantity: null,
            usersQuantity: null,
            categoriesQuantity: null,
        };
    }   

    // Cuando el componente se acaba de mostrar en la pantalla, realizo la petición 

    componentDidMount(){

        fetch("http://localhost:3005/api/products")
        .then( (successRequest) => successRequest.json())
        .then( (jsonData) => {
            this.setState({productsQuantity: jsonData.count})
            this.setState({categoriesQuantity: jsonData.totalCategories})

        })


        fetch("http://localhost:3005/api/users")
        .then( (successRequest) => successRequest.json())
        .then( (jsonData) => {
            this.setState({usersQuantity: jsonData.count})
        })


    }

    render(){
        return(

            <div className="total-card-row-container">
                {this.state.usersQuantity && <TotalCard title="Total de usuarios" quantity={this.state.usersQuantity}/>}
                {this.state.productsQuantity && <TotalCard title="Total de productos" quantity={this.state.productsQuantity}/>}
                {this.state.categoriesQuantity && <TotalCard title="Total de categorias" quantity={this.state.categoriesQuantity}/>}

            </div>

        );
           
    }
    
}

export default TotalProducts;