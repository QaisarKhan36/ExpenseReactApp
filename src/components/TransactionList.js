import React, { useContext } from "react";
import "./TransactionList.css";
import { GlobalContext } from "../context/globalState";
import Transaction from "./transaction";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <>
      <h4 className="Head-his">History</h4>
      <hr className="hor-row" />
      <div className="TransactionBox">
        {transactions.map((transaction) => (
          <Transaction
            key={transaction.id}
            transaction={transaction}
          ></Transaction>
        ))}
      </div>
    </>
  );
};

export default TransactionList;
