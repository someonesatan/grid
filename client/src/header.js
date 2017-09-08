import React, { Component } from 'react';

class Header extends Component {

  getHeader() {
    let headersArray = this.props.headers;
    let headers = headersArray.map((headers, index) =>
      <th key={index}>
        {headers}
      </th>
    )
    return headers
  }

  render() {
    return (
      <thead>
        <tr>
          {this.getHeader()}
        </tr>
      </thead>
    )
  }
}

export default Header;
