import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./cakeSlice";

export const CakeView = () => {
  const storeCakes = useSelector((state) => state.cake.numOfCake);
  const dispatch = useDispatch();
  return (
    <>
      <h2>Cake View</h2>
      <p>Number of Cake: {storeCakes} </p>
      <button onClick={() => dispatch(ordered())}>Order Cake</button> &nbsp;
      <button onClick={() => dispatch(restocked(3))}>Restock Cake</button>
    </>
  );
};
