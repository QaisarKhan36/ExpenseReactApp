import React, { useContext, useState } from "react";
import "./AddTransaction.css";
import { GlobalContext } from "../context/globalState";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const { addTransaction } = useContext(GlobalContext);

  const onSub = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };
    addTransaction(newTransaction);
  };

  return (
    <>
      <h4>Add new transaction</h4>
      <hr />
      <form onSubmit={onSub}>
        <h4>Text</h4>
        <input
          type="text"
          placeholder="Enter Text"
          contentEditable="true"
          className="Inp-box"
          onChange={(e) => setText(e.target.value)}
        />
        <h4>
          Amount <br />
          negative - expenses, positive - Income
        </h4>
        <input
          type="text"
          placeholder="Enter Amount"
          contentEditable="true"
          className="Inp-box"
          onChange={(e) => setAmount(e.target.value)}
        />
        <button className="Add-Trans-Btn"> Add Transaction </button>
      </form>
    </>
  );
};

export default AddTransaction;
