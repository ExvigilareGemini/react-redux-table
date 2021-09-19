function compareArrays(arr1, arr2, index) {
  return arr1[index].cellValue > arr2[index].cellValue ? true : false;
}

function reverseDateRepresentation(arr, index) {
  let parts = arr[index].cellValue.split("/");
  return `${parts[2]}-${parts[1]}-${parts[0]}`;
}

function compareArraysOfDateFormat(arr1, arr2, index) {
  const arrDateFormat1 = reverseDateRepresentation(arr1, index);
  const arrDateFormat2 = reverseDateRepresentation(arr2, index);
  return arrDateFormat1 > arrDateFormat2 ? true : false;
}

const regexIsDateFormat = /[0-9]{2}[/][0-9]{2}[/][0-9]{4}/;

export function sortingColumn(arrayToSort, sortingOrder, categoryToCompare) {
  if (sortingOrder !== 0 || categoryToCompare !== "") {
    arrayToSort.sort((arr1, arr2) => {
      const indexOfCorrespondingCategory = arr1.findIndex(
        (el) => el.category === categoryToCompare
      );
      // If in date format
      if (
        regexIsDateFormat.test(arr1[indexOfCorrespondingCategory].cellValue)
      ) {
        if (
          compareArraysOfDateFormat(arr1, arr2, indexOfCorrespondingCategory)
        ) {
          return sortingOrder;
        }
      } else if (compareArrays(arr1, arr2, indexOfCorrespondingCategory)) {
        return sortingOrder;
      }
      return -sortingOrder;
    });
  }
  return arrayToSort;
}
