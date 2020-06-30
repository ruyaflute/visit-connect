import React from 'react';


class Patient extends React.Component {
  render() {
  return (
    <div className="patient">
      <button
        className="btn"
        disabled={this.props.disabled}
        onClick={ () => this.props.onClick() }
        >
          {this.props.text}
      </button>
    </div>
  );
}
}

export default Patient;