export function filterContent(sortedRowsContent, searchingValue) {
  if (searchingValue) {
    return sortedRowsContent.filter((el) =>
      el.findIndex((cel) =>
        cel.cellValue.toLowerCase().includes(searchingValue.toLowerCase())
      ) === -1
        ? false
        : true
    );
  }
  return sortedRowsContent;
}
