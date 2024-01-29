import React from "react";
import DisplayItem from "./DisplayItem";

const DisplayListItem = (props) => {
  return (
    <React.Fragment>
      <h1>Products : </h1>
      {Array.from(props.items).map((item) => (
        <DisplayItem
          key={item.ID}
          deleteItemHandler={props.onDeleteItem}
          item={item}
        ></DisplayItem>
      ))}
      <h4>Total Value Worth of Products : {props.totalExpense}</h4>
    </React.Fragment>
  );
};
export default DisplayListItem;
