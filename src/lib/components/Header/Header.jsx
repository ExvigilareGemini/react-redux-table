import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { setNumberOfPages } from "../../redux/actions/rrtable-actions";

function Header(props) {
  const {
    title,
    entriesSelector,
    filter,
    nbrOfLignToDisplay,
    setNumberOfLignToDisplay,
  } = props;

  function changeLignNumber(value) {
    setNumberOfLignToDisplay(value);
  }

  return (
    <>
      {title && <h1 className="rrtable-title">{title}</h1>}
      {entriesSelector && (
        <label>
          Show
          <select
            defaultValue={nbrOfLignToDisplay}
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
  return { nbrOfLignToDisplay: state.rrtable.nbrOfLignToDisplay };
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
