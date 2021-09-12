import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { setNumberOfPages } from "../../redux/actions/rrtable-actions";

function Header(props) {
  const {
    title,
    entriesSelector,
    filter,
    setNumberOfPages,
    rowsNumber,
    numberOfLignToDisplay,
  } = props;

  function changeLignNumber(value) {
    setNumberOfPages(value, rowsNumber );
  }

  return (
    <>
      {title && <h1 className="rrtable-title">{title}</h1>}
      {entriesSelector && (
        <label>
          Show
          <select
            defaultValue={numberOfLignToDisplay}
            onChange={(e) => changeLignNumber(parseInt(e.target.value))}
          >
            {entriesSelector.map((el, index) => {
              return (
                <option value={el} key={el + index}>
                  {el}
                </option>
              );
            })}
          </select>
        </label>
      )}
      {filter && (
        <label>
          Search
          <input type="search"></input>
        </label>
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    rowsNumber: state.rrtable.rowsNumber,
    numberOfLignToDisplay: state.rrtable.numberOfLignToDisplay,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      setNumberOfPages,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
