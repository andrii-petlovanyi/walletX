import moment from '../../../node_modules/moment/moment';

export const transactionsListSort = (elementsList, category) => {
  // const nameCategory = (element, category) => {
  //   return category.find(c => c.id === element.categoryId).name;
  // };

  return [...elementsList]
    .sort((a, b) => {
      // console.log(moment(a.transactionDate), 'DD.MM.YY');
      return (moment(a.transactionDate) - moment(b.transactionDate))
    });
};
