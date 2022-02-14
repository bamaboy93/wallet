import { useEffect, useState } from "react";

import api from "../../api/cousres";
import s from "./Currency.module.scss";

const Currency = () => {
  const [course, setCourse] = useState([]);

  useEffect(() => {
    getCourse();
  }, []);

  const getCourse = () => {
    setCourse([]);
    api
      .fetchCourse()
      .then((res) => {
        setCourse(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  if (course.length) {
    return (
      <>
        <div className={s.div}>
          <table className={s.table}>
            <thead className={s.thead}>
              <tr>
                <th className={s.th}>Валюта</th>
                <th className={s.th}>Покупка</th>
                <th className={s.th}>Продажа</th>
              </tr>
            </thead>
            <tbody className={s.tbody}>
              {course.map(({ buy, sale, ccy }) => (
                <tr key={ccy}>
                  <td className={s.td}>{ccy}</td>
                  <td className={s.td}>{Math.floor(buy * 100) / 100}</td>
                  <td className={s.td}>{Math.floor(sale * 100) / 100}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className={s.vector}></div>
        </div>
      </>
    );
  }
  return null;
};

export default Currency;
