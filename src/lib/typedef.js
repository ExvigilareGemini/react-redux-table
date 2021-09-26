/**
 * Content of columns headers
 * @typedef headerCell
 * @type {Object}
 * @property {string} title The title of the column
 * @property {string} category The category of the column
 * @category Types Def
 */

/**
 * Array containing information about columns
 * @typedef headersArray
 * @type {Array}
 * @property {...headerCell}
 * @category Types Def
 */

/**
 * Cell content
 * @typedef cellContent
 * @type {Object}
 * @property {String} cellValue The content of the cell to display
 * @property {String} category The category of the cell, must correspond to a category in the headersArray
 * @category Types Def
 */

/**
 * Array containing arrays of row information
 * @typedef rowsContent
 * @type {Array}
 * @property {Array.<cellContent>} Row The content of a row
 * @category Types Def
 */

/**
 * props of the table
 * @typedef props
 * @type {Object}
 * @property {headersArray} headerArray - The content of column headers
 * @property {rowsContent} rowsContent - The content of the rows
 * @property {string} [title] - The title of the table
 * @property {bool} [filter] - Wether the filtering functionalitu is present
 * @property {number[]} [entriesSelector] - Wether the selector of displayed rows by page is present, numbers in array represent each options for the selector.
 * @property {bool} [showEntries] - Wether the actual status along pages is displayed
 * @property {number|ReduxState} currentPage - Number of the current page in the table
 * @property {string|ReduxState} actualSortedColumn - Name of the column's category that is sorted
 * @property {number|ReduxState} sortingOrder - Sorting order : 1 smaller to bigger, -1 bigger to smaller
 * @property {number|ReduxState} numberOfLignToDisplay - Number of ligns to display in the table
 * @property {number|ReduxState} rowsNumber - The total number of rows
 * @property {number|ReduxState} numberOfPages - The total number of pages
 * @property {string|ReduxState} searchValue - the to search inside the table
 * @property {ReduxAction} initiateState - Redux action creator that initialise the state in redux
 * @property {ReduxAction} setCurrentPage - Redux action creator that set the value of the current displayed page
 * @property {ReduxAction} increaseCurrentPage - Redux action creator that increase the value of the current page
 * @property {ReduxAction} decreaseCurrentPage - Redux action creator that decrease the value of the current page
 * @property {ReduxAction} setNumberOfPages - Redux action creator that set the total number of pages
 * @property {ReduxAction} sortColumn - Redux action creator that sort columns
 * @property {ReduxAction} setFilterSearch - Redux action creator that set the value to search inside Redux state
 * @category Types Def
 */

/**
 * Redux state of the app
 * @namespace State
 * @category Redux
 * @subcategory State
 * @typedef State
 * @type {Object}
 * @property {number} currentPage - Number of the current page in the table
 * @property {string} actualSortedColumn - Name of the column's category that is sorted
 * @property {number} sortingOrder - Sorting order : 1 smaller to bigger, -1 bigger to smaller
 * @property {number} numberOfLignToDisplay - Number of ligns to display in the table
 * @property {number} rowsNumber - The total number of rows
 * @property {number} numberOfPages - The total number of pages
 * @property {string} searchValue - The value to search inside the table
 */

/**
 * Return value of initiateState action creator
 * @typedef initiateStateReturn
 * @type {Object}
 * @property {string} type - The type of the action (INITIATE_STATE)
 * @property {number} rowsNumber - Total number of rows
 * @property {number} numberOfLignToDisplay - Number of lign displayed in the table
 * @property {number} numberOfPages - Total number of pages of the table
 * @category Types Def
 */

/**
 * Return value of setCurrentPage action creator
 * @typedef setCurrentPageReturn
 * @type {Object}
 * @property {string} type - The type of the action (SET_CURRENT_PAGE)
 * @property {currentPage} currentPage - The value of the actual current page
 * @category Types Def
 */

/**
 * Return value of increaseCurrentPage action creator
 * @typedef increaseCurrentPageReturn
 * @type {Object}
 * @property {string} type - The type of the action (INCREASE_CURRENT_PAGE)
 * @property {currentPage} currentPage - The value of the actual current page
 * @category Types Def
 */

/**
 * Return value of decreaseCurrentPage action creator
 * @typedef decreaseCurrentPageReturn
 * @type {Object}
 * @property {string} type - The type of the action (DECREASE_CURRENT_PAGE)
 * @property {currentPage} currentPage - The value of the actual current page
 * @category Types Def
 */

/**
 * Return value of setNumberOfPages action creator
 * @typedef setNumberOfPagesReturn
 * @type {Object}
 * @property {string} type - The type of the action (SET_NUMBER_OF_PAGES)
 * @property {number} rowsNumber - Total number of rows
 * @property {number} numberOfLignToDisplay - Number of lign displayed in the table
 * @property {number} numberOfPages - Total number of pages of the table
 * @category Types Def
 */

/**
 * Return value of sortColumn action creator
 * @typedef sortColumnReturn
 * @type {Object}
 * @property {string} type - The type of the action (SORT_COLUMN)
 * @param {string} actualSortedColumn - Name of the column's category that is sorted
 * @param {number} sortingOrder - Sorting order : 1 smaller to bigger, -1 bigger to smaller
 * @category Types Def
 */

/**
 * Return value of setFilterSearch action creator
 * @typedef setFilterSearchReturn
 * @type {Object}
 * @property {string} type - The type of the action (SET_FILTER_SEARCH)
 * @property {string} searchValue - The value to search inside the table
 * @category Types Def
 */

exports.unused = {};
