function fetchCourse() {
  return fetch(
    `https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11`
  ).then((res) => res.json());
}
const apiCourse = {
  fetchCourse,
};
export default apiCourse;
