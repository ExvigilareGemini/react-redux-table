import React, { useEffect } from "react";
import { connect } from "react-redux";

function PageNumberButton(props) {
  const { numberOfPages } = props;

  return (
    <>
      {Array(numberOfPages)
        .fill(null)
        .map((el, index) => {
          return <button key={index}>{index}</button>;
        })}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    numberOfPages: state.rrtable.numberOfPages,
  };
};

export default connect(mapStateToProps, null)(PageNumberButton);
