import React from 'react';
import { connect } from "react-redux";
import * as API from '../../api/helpers';
import {changeCategorySelector} from"../../redux/actions/uiActions";

class ProductCategorySelect extends React.Component{

    componentDidMount(){
        this.props.dispatch(API.GetAllCategory());
    }

    render(){
        const { error, categories, selectedCategoryId } = this.props;
        return (
            <select onChange={(e)=>this.handleCategoryChange(e.target.value)} value={selectedCategoryId}>
                <option value={0}>Select All</option>
                {categories.map(category => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                ))}
            </select>
        );
    }

    handleCategoryChange(value){
        this.props.dispatch(changeCategorySelector(value));
        this.props.dispatch(API.GetProducts(value));
    }
}

const mapStateToProps = state => ({
    categories: state.CategoryReducer.categories,
    error: state.CategoryReducer.error,
    selectedCategoryId: state.UIReducer.selectedCategoryId
});

export default connect(mapStateToProps)(ProductCategorySelect);