import React from 'react';
import { connect } from "react-redux";
import './styles.css';

import * as API from '../../api/helpers';

class ProductTable extends React.Component{

    componentDidMount(){
        this.props.dispatch(API.GetProducts());
    }

    render(){
        const { error, loading, products } = this.props;

        if(loading){
            return <div>Loading...</div>
        }

        if(error){
            return <div>An Error Has Occured! {error}</div>
        }

        return (
            <table>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{product.desc}</td>
                            <td>$ {product.price.toFixed(2)}</td>
                            <td><button type="button" onClick={()=>this.handleDeleteProduct(product.id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }

    handleDeleteProduct(productId){
        this.props.dispatch(API.DeleteProductById(productId));
    }
}

const mapStateToProps = state => ({
    products: state.ProductReducer.products,
    loading: state.ProductReducer.loading,
    error: state.ProductReducer.error,
    selectedCategoryId: state.ProductReducer.selectedCategoryId
});

export default connect(mapStateToProps)(ProductTable);