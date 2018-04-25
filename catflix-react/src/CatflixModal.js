import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class CatflixModal extends Component {
  static propTypes = {
      onClose: PropTypes.func,
      url: PropTypes.string,
      open: PropTypes.bool
  };

  componentDidMount() {
      this.component.addEventListener('modalClose', this.onModalClose);
  }

  componentWillUnmount() {
      this.component.removeEventListener('modalClose', this.onModalClose);
  }

  onModalClose = () => {
      this.props.onModalClose && this.props.onModalClose();
  };

  _handleRef = (component) => {
      this.component = component;
  };

  render() {
      return (
        <catflix-modal
          ref={ this._handleRef }
          url={ this.props.url }
          open={ this.props.open }></catflix-modal>
      );
  }
}

export default CatflixModal;