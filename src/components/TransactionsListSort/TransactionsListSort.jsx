export const transactionsListSort = (elementsList, category) => {
  const nameCategory = (element, category) => {
    return category.find(c => c.id === element.categoryId).name;
  };

  return [...elementsList]
    .sort((a, b) => Date(a.transactionDate) - Date(b.transactionDate))
    .sort((a, b) =>
      nameCategory(a, category).localeCompare(nameCategory(b, category))
    );
};
