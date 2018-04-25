import React from 'react';
import PropTypes from 'prop-types';

const buttonStyle = {
  padding: '.5rem 1.5rem',
  display: 'inline-block',
  border: '3px solid #00698f',
  backgroundColor: '#00698f'
}

class AppButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button style={buttonStyle}>
        { this.props.text }
      </button>
    );
  }
}

AppButton.propTypes = {
  text: PropTypes.string,
};

export default AppButton;