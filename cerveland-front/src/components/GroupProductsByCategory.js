import { React, Component } from "react";
import './GroupProductsByCategory.css'
import ProductsByCategory from "./ProductsByCategory";

class GroupProductsByCategory extends Component {

    constructor(props) {
        super(props);

        //datos mutables
        this.state = {
            productsByCategory: []
        };
    }

    // Cuando el componente se acaba de mostrar en la pantalla, realizo la petición 

    componentDidMount() {

        fetch("http://localhost:3005/api/products")
            .then((successRequest) => successRequest.json())
            .then((jsonData) => {
                this.setState({ productsByCategory: jsonData.countByCategory })
            })
    }

    render() {
        return (
            <div className="products-by-category-container">
                {
                    this.state.productsByCategory.map((categ, i) => {

                        if (categ.id_productCategory === 1) {
                            return (this.state.productsByCategory && <ProductsByCategory title="Insumos" count={categ.count} key={categ.id_productCategory}/>)
                        } else {
                            return (this.state.productsByCategory && <ProductsByCategory title="Equipos" count={categ.count} key={categ.id_productCategory}/>)
                        }
                    })
                }
            </div>
        );
    }
}

export default GroupProductsByCategory;