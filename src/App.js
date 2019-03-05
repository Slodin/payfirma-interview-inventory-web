import React, { Component } from 'react';
import ProductTable from './components/ProductTable/index';
import ProductCategorySelect from './components/ProductCategorySelect/index';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <ProductCategorySelect />
        </div>
        <div className="App-body">
          <ProductTable />
        </div>
      </div>
    );
  }
}

export default App;
