export const getAllTransactions = (state) => state.transactions.finance;
export const getLoader = (state) => state.transactions.isLoading;
export const getYears = (state) => state.transactions.years;
export const getPage = (state) => state.transactions.page;
export const getTotalPages = (state) => state.transactions.totalPages;

const transactionSelectors = {
  getAllTransactions,
  getLoader,
  getYears,
  getPage,
  getTotalPages,
};
export default transactionSelectors;
