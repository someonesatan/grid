import React, { Component } from 'react';

class Content extends Component {

  constructor(props) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this);
  }

  getTd(array) {
    let tdArray = [];
    tdArray = array.map((value, index) =>
      <td key={index}
          onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}
          onClick={this.toggleModal}
      >
        {value}
      </td>
    )
    return tdArray;
  }

  getContent() {
    let contentArray = this.props.content;
    let trArray = contentArray.map((array, index) =>
      <tr key={index}>
        {this.getTd(array)}
      </tr>
    )
    return trArray;
  }

  handleMouseOver(e) {
    e.target.bgColor='#b3d0cc'
  }

  handleMouseOut(e) {
    e.target.bgColor='#FFFFFF'
  }

  toggleModal(e) {
    this.props.handleOnClick(e);
  }

  render() {
    return (
      <tbody>
        {this.getContent()}
      </tbody>
    )
  }
}

export default Content;
