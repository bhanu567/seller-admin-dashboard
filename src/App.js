import InputForm from "./components/InputForm";
import { useState } from "react";
import DisplayListItem from "./components/DisplayListItem";

let sumOfAllPrices = 0;
const list = { ...localStorage };
const listItem = Object.values(list).map((item) => {
  sumOfAllPrices += Number(JSON.parse(item).Price);
  return JSON.parse(item);
});
function App() {
  const [ItemList, setItemList] = useState(listItem);
  const [totalExpense, setTotalExpense] = useState(sumOfAllPrices);

  const addNewItemHandler = (newItem) => {
    localStorage.setItem(`${newItem.ID}`, JSON.stringify(newItem));
    setTotalExpense(Number(totalExpense) + Number(newItem.Price));
    setItemList((prevItemList) => {
      return [...prevItemList, newItem];
    });
  };
  const deleteItemHandler = (ID) => {
    let PriceTobeReduced = 0;

    const UpdatedItem = ItemList.filter((item) => {
      if (item.ID === ID) PriceTobeReduced = item.Price;
      return item.ID !== ID;
    });
    localStorage.removeItem(ID);
    setItemList(UpdatedItem);
    setTotalExpense(Number(totalExpense) - Number(PriceTobeReduced));
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
