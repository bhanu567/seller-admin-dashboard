import InputForm from "./components/InputForm";
import { useState } from "react";
import DisplayListItem from "./components/DisplayListItem";

function App() {
  const [ItemList, setItemList] = useState([]);
  const [totalExpense, setTotalExpense] = useState(0);
  const addNewItemHandler = (newItem) => {
    localStorage.setItem(`${newItem.ID}`, JSON.stringify(newItem));
    setTotalExpense(Number(totalExpense) + Number(newItem.Price));
    setItemList((prevItemList) => {
      return [...prevItemList, newItem];
    });
  };
  const deleteItemHandler = (ID) => {
    let PriceTobeReduced=0;
    localStorage.removeItem(ID);
    for (let index = 0; index < ItemList.length; index++) {
      if (ItemList[index].ID===ID) {
        PriceTobeReduced=ItemList[index].Price;
      };
      
    }
    setItemList((prevItemList) => {
      const UpdatedItem = prevItemList.filter((item) => item.ID !== ID);
      return UpdatedItem;
    });
    setItemList(Number(totalExpense)-Number(PriceTobeReduced));
  };
  return (
    <div>
      <InputForm onAddNewItem={addNewItemHandler}></InputForm>
      <DisplayListItem
        items={ItemList}
        totalExpense={totalExpense}
        onDeleteItem={deleteItemHandler}
      ></DisplayListItem>
    </div>
  );
}

export default App;
