export function sortingColumn(arrayToSort, sortingOrder, categoryToCompare) {
  if (sortingOrder !== 0 || categoryToCompare !== "") {
    arrayToSort.sort((a, b) => {
      const indexOfCorrespondingCategory = a.findIndex(
        (el) => el.category === categoryToCompare
      );
      if (
        a[indexOfCorrespondingCategory].cellValue >
        b[indexOfCorrespondingCategory].cellValue
      ) {
        return sortingOrder;
      }
      return -sortingOrder;
    });
  }
  return arrayToSort;
}
