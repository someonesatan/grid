import React, { Component } from 'react';

class Content extends Component {

  getTd(array) {
    let tdArray = [];
    tdArray = array.map((value, index) =>
      <td key={index}>
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

  render() {
    return (
      <tbody>
        {this.getContent()}
      </tbody>
    )
  }
}

export default Content;
