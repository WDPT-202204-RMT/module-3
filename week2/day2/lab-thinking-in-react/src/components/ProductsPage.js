// src/components/ProductsPage.js

import { useState } from 'react';
import SearchBar from "./SearchBar"
import ProductTable from "./ProductTable"
import jsonData from '../data.json';

function ProductsPage () {
  const [products, setProducts] = useState(jsonData);
  const [search, setSearch] = useState("");
  
  return(
      <div>
        <h1>IronStore</h1>
        <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />
        <ProductTable products={search ? products.filter((e) => e.name.toLowerCase().includes(search.toLowerCase())) : products} />
      </div>    
  )
}

export default ProductsPage