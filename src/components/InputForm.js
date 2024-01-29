import React, { useRef } from "react";
import "./InputForm.css";

const InputForm = (props) => {
  const ProductIDref = useRef();
  const SellingPriceref = useRef();
  const ProductNameref = useRef();

  const SubmiteHandler = (e) => {
    e.preventDefault();
    const ProductID = ProductIDref.current.value;
    const SellingPrice = SellingPriceref.current.value;
    const ProductName = ProductNameref.current.value;
    if (
      ProductID.trim().length === 0 ||
      SellingPrice.trim().length === 0 ||
      ProductName.trim().length === 0
    ) {
      prompt("Please, Enter a Valid Value");
    } else {
      const newItem = {
        ID: ProductID,
        Price: SellingPrice,
        Name: ProductName,
      };
      props.onAddNewItem(newItem);
      ProductIDref.current.value = "";
      SellingPriceref.current.value = "";
      ProductNameref.current.value = "";
    }
  };
  return (
    <React.Fragment>
      <form onSubmit={SubmiteHandler}>
        <label htmlFor="PID">Product ID : </label>
        <input id="PID" type="text" ref={ProductIDref}></input>
        <label htmlFor="SP">Selling Price : </label>
        <input id="SP" type="number" ref={SellingPriceref}></input>
        <label htmlFor="PN">Product Name : </label>
        <input id="PN" type="text" ref={ProductNameref}></input>
        <button type="submit">Add Product</button>
      </form>
    </React.Fragment>
  );
};
export default InputForm;
