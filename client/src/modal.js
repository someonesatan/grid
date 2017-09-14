import React, { Component } from 'react';

class Modal extends Component {
  render() {
    if (!this.props.show) {
      return null;
    }

    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 50
    };

    const modalStyle = {
      position: 'relative',
      backgroundColor: '#fff',
      borderRadius: 5,
      maxWidth: 300,
      minHeight: 150,
      margin: '0 auto',
      padding: 30
    };

    return (
      <div className='backdrop' style={backdropStyle}>
        <div className='modal' style={modalStyle}>
          {this.props.value}

          <div className='footer'>
            <button id='closeButton' onClick={this.props.onClose}>
              ' x '
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
