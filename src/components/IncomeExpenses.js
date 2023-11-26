import React, { useContext } from "react";
import "./IncomeExpenses.css";
import { GlobalContext } from "../context/globalState";

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  const amount = transactions.map((transaction) => transaction.amount);

  const income = amount
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  const expense = (
    amount.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);
  return (
    <div className="Box">
      <div className="Income">
        <h3>
          INCOME <br /> <span>${income}</span>
        </h3>
      </div>
      <hr className="ver-row" />
      <div className="Expense">
        <h3>
          EXPENSE <br /> <span>${expense}</span>
        </h3>
      </div>
    </div>
  );
};

export default IncomeExpenses;
