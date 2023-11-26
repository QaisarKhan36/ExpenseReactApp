import React, { useContext } from "react";
import "./Balance.css";
import { GlobalContext } from "../context/globalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  let amounts = transactions.map((transaction) => transaction.amount);
  let Total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <>
      <h4>YOUR BALANCE</h4>
      <h2>${Total}</h2>
    </>
  );
};

export default Balance;
