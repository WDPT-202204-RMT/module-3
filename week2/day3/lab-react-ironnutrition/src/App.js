import { useState } from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import { Button, Divider, Row } from 'antd';
import Search from './components/Search';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const [foodList, setFoodlist] = useState(foods);
  const [foodListData, setFoodListData] = useState(foods);
  const [Hide, setHide] = useState(true);

  const addFood = (newFood) => {
    console.log('test');
    setFoodlist([newFood, ...foodList]);
    setFoodListData([newFood, ...foodListData]);
    toast.success('🦄 Wow so easy! 🍻🤪', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const searchFood = (searchedFood) => {
    const filteredFood = foodListData.filter((food) => {
      return food.name.toLowerCase().includes(searchedFood.toLowerCase());
    });

    setFoodlist(filteredFood);
  };

  const deleteFood = (index) => {
    const foodListCopy = [...foodList];

    foodListCopy.splice(index, 1);
    setFoodlist(foodListCopy);
    setFoodListData(foodListCopy);
    toast.error('Removed Food !', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {!Hide ? <AddFoodForm addFood={addFood} /> : null}
      <Button danger onClick={() => setHide(!Hide)}>
        {Hide ? 'Open the form' : 'Close the form'}
      </Button>
      <Search searchFood={searchFood} />
      <Divider>Food List</Divider>
      {!foodList.length && !foodListData.length && (
        <div>
          NO MORE FOOD 🥺
          <img src="https://www.publicdomainpictures.net/pictures/280000/nahled/not-found-image-15383864787lu.jpg"></img>
        </div>
      )}
      <Row align={'center'}>
        {foodList.map((food, index) => (
          <FoodBox
            key={index}
            food={food}
            deleteFood={deleteFood}
            index={index}
          />
        ))}
      </Row>
    </div>
  );
}

export default App;
