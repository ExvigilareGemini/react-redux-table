/**
 * Return an array of rowsContent that have been filtered with a searching value. 
 * If a cell of a row include a part of the searchingValue, it is returned. 
 * @category Functions
 * @param {Array.string[]} rowsContent 
 * @param {string} searchingValue 
 * @returns {Array.string[]}
 */
export function filterContent(rowsContent, searchingValue) {
  if (searchingValue) {
    return rowsContent.filter((el) =>
      el.findIndex((cel) =>
        cel.cellValue.toLowerCase().includes(searchingValue.toLowerCase())
      ) === -1
        ? false
        : true
    );
  }
  return rowsContent;
}
