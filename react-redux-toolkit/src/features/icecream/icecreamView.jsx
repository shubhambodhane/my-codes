import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./icecreamSlice";

export const IcecreamView = () => {
  const storeIcecream = useSelector((state) => state.icecream.numOfIcecream);
  const dispatch = useDispatch();
  return (
    <>
      <h2>Ice Cream View</h2>
      <p>Number of Ice Cream: {storeIcecream} </p>
      <button onClick={() => dispatch(ordered())}>Order Ice Cream</button>
      &nbsp;
      <button onClick={() => dispatch(restocked(3))}>Restock Ice Cream</button>
    </>
  );
};
