export default function isSelected(index, currentPage) {
    if (index === currentPage) {
      return "rrtable-pageSelector-nbrButton-selected";
    }
    return "rrtable-pageSelector-nbrButton";
  }
