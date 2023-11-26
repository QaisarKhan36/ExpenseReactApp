import React, { useContext } from "react";
import "./transaction.css";
import { GlobalContext } from "../context/globalState";

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <>
      <div className={transaction.amount < 0 ? "red HisBox" : "green HisBox"}>
        <button className="top-btn">
          <button
            className="delete_btn"
            onClick={() => deleteTransaction(transaction.id)}
          >
            X
          </button>
        </button>
        <h4>{transaction.text}</h4>
        <h4>
          {sign} ${Math.abs(transaction.amount)}
        </h4>
      </div>
    </>
  );
};

export default Transaction;
