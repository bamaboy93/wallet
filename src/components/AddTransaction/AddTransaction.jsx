import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "react-datetime/css/react-datetime.css";
import Datetime from "react-datetime";
import { useFormik } from "formik";
import * as yup from "yup";
import { addTransaction } from "../../redux/transactions/transactions-operations";
import { getCategories } from "../../redux/categories/categoriesOperations";
import sprite from "../../images/svg_sprite.svg";
// import s from "./FormAddTransactions.module.css";

const dayValue = new Date().getDate();
const monthValue = new Date().getMonth() + 1;
const yearValue = new Date().getYear() + 1900;
const dateValue = dayValue + "." + monthValue + "." + yearValue;

const DatetimeField = ({ name, onChange }) => {
  return (
    <Datetime
      //   className={s.datetime}
      inputProps={{
        style: {
          width: "100%",
          height: "33px",
          border: "none",
          outline: "none",
          fontFamily: "Circe, sans-serif",
          fontStyle: "normal",
          fontWeight: "normal",
          fontSize: "18px",
          lineHeight: "1.5",
        },
      }}
      dateFormat="DD.MM.YYYY"
      timeFormat={false}
      closeOnSelect={true}
      isValidDate={(current) => {
        let today = new Date();
        return current.isBefore(today);
      }}
      initialValue={dateValue}
      onChange={(value) => {
        onChange(
          name,
          value._d.getDate() +
            "." +
            (value._d.getMonth() + 1) +
            "." +
            (value._d.getYear() + 1900)
        );
      }}
    />
  );
};

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.substring(1);
}

export default function FormAddTransactions({ onClose }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  const expensesСategories = useSelector((state) => state.categories.all);

  const formik = useFormik({
    initialValues: {
      type: "expenses",
      category: "",
      amount: "",
      date: dateValue,
      day: dayValue,
      month: monthValue,
      year: yearValue,
      comment: "",
    },

    validationSchema: yup.object().shape({
      type: yup.string().required("Required field"),
      amount: yup
        .number()
        .typeError("Enter the number")
        .min(0)
        .required("Required field"),
      date: yup.string().required("Required field"),
      comment: yup.string().max(15, "No more than 15 characters allowed "),
    }),

    onSubmit: (values) => {
      const type = values.type;
      const category =
        values.type === "incomes"
          ? "incomes"
          : values.category || expensesСategories[0];
      const amount = Number(values.amount);
      const date = values.date;
      const arrayDate = date.split(".");
      const day = Number(arrayDate[0]);
      const month = Number(arrayDate[1]);
      const year = Number(arrayDate[2]);
      const comment = values.comment;

      dispatch(
        addTransaction({
          type,
          category,
          amount,
          date,
          day,
          month,
          year,
          comment,
        })
      );
      onClose();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <input
          //   className={s.radio}
          id={"incomes"}
          type={"radio"}
          name={"type"}
          value={"incomes"}
          checked={formik.values.type === "incomes"}
          onChange={formik.handleChange}
        />
        <label
          //   className={s.incomes}
          style={{
            color: formik.values.type === "incomes" ? "#24CCA7" : "#e0e0e0",
          }}
          for="incomes"
        >
          Incomes
        </label>
        <div></div>
        <input
          //   className={s.radio}
          id={"expenses"}
          type={"radio"}
          name={"type"}
          value={"expenses"}
          checked={formik.values.type === "expenses"}
          onChange={formik.handleChange}
        />
        <label
          //   className={s.expenses}
          style={{
            color: formik.values.type === "expenses" ? "#ff6596" : "#e0e0e0",
          }}
          for="expenses"
        >
          Expenses
        </label>
      </div>
      <div>
        {formik.values.type === "expenses" && (
          <select
            // className={s.category}
            name={"category"}
            placeholder={"Type to search"}
            value={formik.values.category}
            onChange={formik.handleChange}
          >
            <option value="" disabled hidden>
              Сhoose a category
            </option>
            {expensesСategories.map((category, i) => {
              return (
                <option value={category} key={i}>
                  {capitalizeFirstLetter(category)}
                </option>
              );
            })}
          </select>
        )}

        <div>
          <input
            // className={s.input}
            type={"text"}
            name={"amount"}
            placeholder={"0.00"}
            value={formik.values.amount}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.amount && formik.errors.amount && (
            <p>{formik.errors.amount}</p>
          )}
          <div>
            <label>
              <DatetimeField
                name="date"
                value={formik.values.date}
                onChange={formik.setFieldValue}
              />
              <svg>
                <use href={sprite + "#icon-calendar"}></use>
              </svg>
            </label>
          </div>
        </div>
        <div>
          <input
            // className={s.input}
            type="text"
            name="comment"
            placeholder="Comment"
            value={formik.values.comment}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.comment && formik.errors.comment && (
            <p>{formik.errors.comment}</p>
          )}
        </div>
      </div>
      <button type="submit">Add</button>
      <button
        // className={s.cancel}
        type="button"
        name="cancel"
        onClick={onClose}
      >
        Cancel
      </button>
    </form>
  );
}
