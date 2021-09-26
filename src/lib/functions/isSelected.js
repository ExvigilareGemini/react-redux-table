/**
 * Set the css class selected to the button corresponding to the current page 
 * @category Functions
 * @param {number} btnNumber - Number of the button
 * @param {number} currentPage - The actual current page
 * @returns {string} The css class of the button
 */
export default function isSelected(btnNumber, currentPage) {
    if (btnNumber === currentPage) {
      return "rrtable-pageSelector-nbrButton-selected";
    }
    return "rrtable-pageSelector-nbrButton";
  }
