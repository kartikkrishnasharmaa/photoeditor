import React from "react";
import { connect } from "react-redux";

class ReturnDefaultButton extends React.Component {
  render() {
    return (
      <div>
        {this.props.showSlider ? (
          <div>
            <button
              className="btn btn-primary btn-block mt-5"
              style={{
                borderRadius: "2px",
                border: 0,
                backgroundColor: "#3f51b5",
                fontSize: 13
              }}
              onClick={this.props.handleReturnDefaultButton}
            >
              Redefinir imagem
            </button>
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { showSlider: state.showSlider };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleReturnDefaultButton: () => {
      dispatch({
        type: "HANDLE_RETURN_DEFAULT_BUTTON",
      });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReturnDefaultButton);