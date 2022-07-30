// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 5
function Search(props) {
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setSearch(e.target.value);
    props.searchFood(e.target.value);
  };

  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={search} type="search" onChange={handleChange} />
    </>
  );
}

export default Search;
