import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { setNumberOfLignToDisplay } from "../../redux/actions/rrtable-actions";

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
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
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
      setNumberOfLignToDisplay,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
