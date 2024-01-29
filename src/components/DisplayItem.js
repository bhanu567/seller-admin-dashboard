import React from "react";
const DisplayItem = (props) => {
  const DeleteItemHandler = (e) => {
    props.deleteItemHandler(e.target.parentElement.id);
  };
  return (
    <li id={props.item.ID}>
      {props.item.ID} - {props.item.Name} - {props.item.Price}
      <button onClick={DeleteItemHandler}>Delete Product</button>
    </li>
  );
};
export default DisplayItem;
